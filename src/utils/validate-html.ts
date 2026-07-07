const CJK = /[\u4e00-\u9fff\u3400-\u4dbf]/
const FORBIDDEN_PATTERNS: [RegExp, string][] = [
  [/<style[\s>]/i, '<style> 标签会被过滤，样式必须内联'],
  [/<script[\s>]/i, '<script> 标签会被过滤'],
  [/<\/?div[\s>]/i, '<div> 会被改写，请用 <section>'],
  [/<link[\s>]/i, '外部 <link>（CSS/字体）会被过滤'],
  [/\sclass\s*=/i, 'class 属性会被剥离，请用内联 style'],
  [/\sid\s*=/i, 'id 属性会被剥离'],
  [/position\s*:\s*(fixed|absolute|sticky)/i, 'position fixed/absolute/sticky 不被支持'],
  [/float\s*:/i, 'float 不被支持'],
  [/@media/i, '@media 媒体查询不被支持'],
  [/@keyframes/i, '@keyframes 动画不被支持'],
  [/@import/i, '@import 不被支持'],
  [/display\s*:\s*grid/i, 'display:grid 不被支持，请用 flex'],
  [/var\s*\(\s*--/i, 'CSS 变量 var(--x) 不被支持，请写死值'],
  [/url\s*\(\s*['"]?https?:\/\/[^)]*\.(woff2?|ttf|otf|eot)/i, '外部字体不被支持'],
]

const CODE_STYLE = /monospace|white-space\s*:\s*pre|courier|consolas|sf mono/i
const HALF_PUNCT = /[\u4e00-\u9fff\u3400-\u4dbf][,;!?]/
const SKIP_TAGS = new Set(['head', 'title', 'style', 'script'])

export interface ValidationResult {
  errors: string[]
  warnings: string[]
  leafCount: number
}

export function validateHTML(html: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  for (const [rx, msg] of FORBIDDEN_PATTERNS) {
    const hits = (html.match(rx) || []).length
    if (hits > 0) {
      errors.push(`${msg}（命中 ${hits} 处）`)
    }
  }

  const result = checkLeafWrapping(html)

  const hasCJK = CJK.test(html)
  if (hasCJK && result.leafCount === 0) {
    errors.push('全文没有任何 <span leaf=""> 包裹——粘贴到公众号后样式会大面积丢失')
  } else if (result.unwrapped.length > 0) {
    const samples = result.unwrapped.slice(0, 5)
      .map(s => `「${s.text}」(在 <${s.parentTag}> 内)`)
      .join('；')
    warnings.push(
      `${result.unwrapped.length} 处中文文本未被 <span leaf> 包裹，样式可能丢失。例：${samples}`
    )
  }

  if (result.halfPunct.length > 0) {
    const samples = result.halfPunct.slice(0, 5)
      .map(s => `「${s}」`)
      .join('；')
    warnings.push(
      `${result.halfPunct.length} 处正文疑似半角标点/英文引号，应改中文全角（代码块内不计）。例：${samples}`
    )
  }

  return { errors, warnings, leafCount: result.leafCount }
}

function checkLeafWrapping(html: string) {
  const leafCount = (html.match(/<span\s+leaf[\s=]/gi) || []).length
  const unwrapped: { text: string; parentTag: string }[] = []
  const halfPunct: string[] = []

  const tagStack: string[] = []
  const leafDepth: number[] = []
  const codeDepth: number[] = []
  let currentLeafDepth = 0
  let currentCodeDepth = 0

  const tagRegex = /<\/?(\w+)([^>]*)>/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = tagRegex.exec(html)) !== null) {
    const [fullMatch, tagName, attrs] = match
    const isClosing = fullMatch.startsWith('</')
    const textBetween = html.slice(lastIndex, match.index)
    lastIndex = match.index + fullMatch.length

    if (textBetween && !isClosing) {
      const text = textBetween.replace(/<[^>]+>/g, '').trim()
      if (text && CJK.test(text)) {
        const parent = tagStack[tagStack.length - 1] || '(root)'
        if (!SKIP_TAGS.has(parent)) {
          if (currentLeafDepth === 0) {
            const snippet = text.length > 24 ? text.slice(0, 24) + '…' : text
            unwrapped.push({ text: snippet, parentTag: parent })
          }
          if (currentCodeDepth === 0 && (HALF_PUNCT.test(text) || /["']/.test(text))) {
            const snippet = text.length > 24 ? text.slice(0, 24) + '…' : text
            halfPunct.push(snippet)
          }
        }
      }
    }

    if (!isClosing) {
      tagStack.push(tagName)
      const isLeaf = tagName === 'span' && /leaf\s*=\s*["']?["']?/.test(attrs.trim())
      const isCode = CODE_STYLE.test(attrs)
      leafDepth.push(isLeaf ? 1 : 0)
      codeDepth.push(isCode ? 1 : 0)
      if (isLeaf) currentLeafDepth++
      if (isCode) currentCodeDepth++
    } else {
      if (tagStack.length > 0 && tagStack[tagStack.length - 1] === tagName) {
        const poppedLeaf = leafDepth.pop() || 0
        const poppedCode = codeDepth.pop() || 0
        tagStack.pop()
        if (poppedLeaf) currentLeafDepth--
        if (poppedCode) currentCodeDepth--
      }
    }
  }

  return { leafCount, unwrapped, halfPunct }
}
