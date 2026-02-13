'use client'

import { useState, useEffect, useRef } from 'react'
import { ThemeConfig, FontSize, BackgroundType } from '@/types'
import { getAllThemes, builtInThemes, generateTemplateTheme } from '@/config/themes'
import { parseMarkdown } from '@/utils/markdown-parser'
import { generateThemeCSS } from '@/utils/theme-css'

const defaultMarkdown = `# 欢迎使用微信 Markdown 编辑器

沉浸创作，美由心生。我们致力于为您提供一个简洁、高效、美观的公众号文章排版工具。

## ✨ 主要功能

- **实时预览**：左侧编辑，右侧即时查看排版效果
- **一键复制**：轻松复制富文本格式，直接粘贴到公众号后台
- **精美样式**：内置精心调校的微信主题，确保最佳阅读体验
- **代码高亮**：支持多种编程语言的语法高亮
- **Markdown 兼容**：全面支持标准及扩展 Markdown 语法

## 📝 文本样式

这是普通段落文本。我们相信，好的工具能让创作事半功倍。通过简化排版流程，您可以将更多精力投入到创造有价值的内容上。

这是 **加粗文本**，而这是 *斜体文本*。

## 💡 提示框

> [!tip] 这是一个提示块，适合用来补充说明重要信息。

> [!warning] 注意潜在的风险，请谨慎操作。

## 📊 表格示例

| 功能 | 状态 | 优先级 |
|------|------|--------|
| 实时预览 | ✅ 已支持 | 高 |
| 自定义主题 | ✅ 已支持 | 高 |
| 图片上传 | 🚀 计划中 | 中 |

## 💻 代码示例

\`\`\`javascript
function sayHello(name) {
  console.log(\`Hello, \${name}! Welcome to the best Markdown editor.\`);
}

sayHello('Creator');
\`\`\`

## 🔗 链接与图片

这是一个指向开发者网站的链接：[极客杰尼](https://example.com)

---

> 正如乔布斯所说：设计不仅仅是外观和感觉，设计是产品如何运作。
`

export default function Editor() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [selectedTheme, setSelectedTheme] = useState('default')
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('default')
  const [showThemePanel, setShowThemePanel] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const allThemes = getAllThemes()
  const currentTheme = allThemes.find(t => t.id === selectedTheme) || builtInThemes.default

  useEffect(() => {
    if (previewRef.current) {
      const css = generateThemeCSS(currentTheme, fontSize, backgroundType)
      let styleEl = document.getElementById('theme-styles')
      if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = 'theme-styles'
        document.head.appendChild(styleEl)
      }
      styleEl.textContent = css
    }
  }, [currentTheme, fontSize, backgroundType])

  const handleCopy = async () => {
    if (previewRef.current) {
      const content = previewRef.current.innerHTML
      try {
        await navigator.clipboard.writeText(content)
        
        const blob = new Blob([content], { type: 'text/html' })
        const clipboardItem = new ClipboardItem({ 'text/html': blob })
        await navigator.clipboard.write([clipboardItem])
        
        alert('复制成功！可以直接粘贴到微信公众号后台')
      } catch (err) {
        const textArea = document.createElement('textarea')
        textArea.value = content
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('复制成功！')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">
              微信公众号 Markdown 编辑器
            </h1>
            <span className="text-sm text-gray-500">
              支持 38 种精美主题
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value as FontSize)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="small">小号 (14px)</option>
              <option value="medium">中号 (15px)</option>
              <option value="large">大号 (16px)</option>
            </select>
            
            <select
              value={backgroundType}
              onChange={(e) => setBackgroundType(e.target.value as BackgroundType)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">默认背景</option>
              <option value="grid">网格背景</option>
              <option value="none">无背景</option>
            </select>
            
            <button
              onClick={() => setShowThemePanel(!showThemePanel)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              选择主题
            </button>
            
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              📋 复制
            </button>
          </div>
        </div>
      </header>

      {showThemePanel && (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-sm font-medium text-gray-700 mb-3">内置主题</h3>
            <div className="grid grid-cols-6 gap-2 mb-4">
              {Object.values(builtInThemes).map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`px-3 py-2 rounded-lg text-sm text-left transition-all ${
                    selectedTheme === theme.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <div className="font-medium">{theme.name}</div>
                  <div className="text-xs opacity-75">{theme.description}</div>
                </button>
              ))}
            </div>

            <h3 className="text-sm font-medium text-gray-700 mb-3">模板主题</h3>
            <div className="grid grid-cols-8 gap-2">
              {allThemes
                .filter(t => t.type === 'template')
                .map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme.id)}
                    className={`px-2 py-1.5 rounded text-xs transition-all ${
                      selectedTheme === theme.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    style={{ borderLeft: `3px solid ${theme.colors.primary}` }}
                  >
                    {theme.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex h-[calc(100vh-120px)]">
        <div className="w-1/2 border-r border-gray-200 flex flex-col">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-600">Markdown 编辑</span>
          </div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none bg-white"
            placeholder="在这里输入 Markdown 内容..."
          />
        </div>

        <div className="w-1/2 flex flex-col bg-white">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-600">预览效果</span>
            <span className="ml-2 text-xs text-gray-400">
              当前主题: {currentTheme.name}
            </span>
          </div>
          <div
            ref={previewRef}
            className="flex-1 overflow-y-auto p-4 wechat-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
          />
        </div>
      </main>
    </div>
  )
}
