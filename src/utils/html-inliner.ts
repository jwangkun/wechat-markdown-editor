import { ThemeConfig } from '@/types'

function escapeCSS(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

const WRAP_TAGS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'blockquote', 'span', 'a', 'strong', 'em', 'section'])

function wrapTextNodes(el: Element): void {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null)
  const textNodes: Text[] = []
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text)
  }
  for (const node of textNodes) {
    if (!node.textContent || !node.textContent.trim()) continue
    const parent = node.parentElement
    if (!parent || parent.tagName === 'SPAN' && parent.hasAttribute('leaf')) continue
    if (parent && (parent.tagName === 'STYLE' || parent.tagName === 'SCRIPT')) continue
    if (parent && parent.closest('pre')) continue

    const span = document.createElement('span')
    span.setAttribute('leaf', '')
    parent?.insertBefore(span, node)
    span.appendChild(node)
  }
}

function cleanupElement(el: Element): void {
  el.removeAttribute('class')
  el.removeAttribute('id')

  if (el.tagName === 'DIV') {
    const section = document.createElement('section')
    while (el.firstChild) {
      section.appendChild(el.firstChild)
    }
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i]
      if (attr.name !== 'class' && attr.name !== 'id') {
        section.setAttribute(attr.name, attr.value)
      }
    }
    el.parentNode?.replaceChild(section, el)
  }
}

function inlineStyles(el: Element): void {
  const computed = getComputedStyle(el)
  const forbidden = ['position', 'float', 'clear']
  let inline = el.getAttribute('style') || ''

  for (let i = 0; i < computed.length; i++) {
    const prop = computed[i]
    if (forbidden.includes(prop)) continue
    if (prop.startsWith('-webkit-') || prop.startsWith('-moz-')) {
      if (prop !== '-webkit-text-fill-color' && prop !== '-webkit-background-clip') continue
    }
    if (prop === 'background-image' && computed.getPropertyValue(prop).includes('gradient')) {
      inline += `${prop}:${computed.getPropertyValue(prop)};`
      continue
    }
    if (['border-bottom-style', 'border-left-style', 'border-top-style', 'border-right-style',
         'border-bottom-width', 'border-left-width', 'border-top-width', 'border-right-width',
         'border-collapse', 'border-spacing', 'empty-cells', 'caption-side',
         'list-style', 'list-style-type', 'list-style-position',
         'orphans', 'widows', 'page-break', 'box-sizing',
         'vertical-align', 'text-overflow', 'overflow-wrap', 'word-break',
         'user-select', 'tab-size', 'hyphens'].includes(prop)) {
      continue
    }
    if (['width', 'height', 'min-width', 'min-height', 'max-width'].includes(prop)) {
      const val = computed.getPropertyValue(prop)
      if (val === 'auto' || val.endsWith('%')) {
        inline += `${prop}:${val};`
      }
      continue
    }

    const val = computed.getPropertyValue(prop)
    if (val && val !== 'none' && val !== 'normal' && val !== '0px' &&
        !val.endsWith('auto') && val !== '0' && val !== '' &&
        prop !== 'all' && !prop.startsWith('--') && prop !== 'unicode-bidi') {
      if (prop === 'text-shadow' && val === 'none') continue
      if (prop === 'box-shadow' && val === 'none') continue
      if (prop === 'outline' && val === 'none') continue
      inline += `${prop}:${val};`
    }
  }

  el.setAttribute('style', inline)
}

export function convertToInlineHTML(previewElement: HTMLElement): string {
  const clone = previewElement.cloneNode(true) as HTMLElement

  wrapTextNodes(clone)

  const allElements = clone.querySelectorAll('*')
  allElements.forEach(el => {
    if (el.tagName === 'STYLE' || el.tagName === 'SCRIPT') {
      el.remove()
      return
    }
    inlineStyles(el)
    cleanupElement(el)
  })

  return clone.innerHTML
}
