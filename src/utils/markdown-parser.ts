import { marked } from 'marked'

marked.setOptions({
  breaks: true,
  gfm: true,
})

export function parseExtendedMarkdown(content: string): string {
  let processed = content
  
  processed = processed.replace(
    /:::gallery\[([^\]]*)\]([\s\S]*?):::/g,
    (match, title, images) => {
      const imageList = images.trim().split('\n').filter((line) => line.trim())
      const imageTags = imageList.map((src) => `<img src="${src.trim()}" alt="${title}" />`).join('')
      return `<div class="gallery">${imageTags}</div>`
    }
  )
  
  processed = processed.replace(
    /:::longimage\[([^\]]*)\]([\s\S]*?):::/g,
    (match, title, image) => {
      return `<div class="longimage"><p><strong>${title}</strong></p><img src="${image.trim()}" alt="${title}" /></div>`
    }
  )
  
  processed = processed.replace(
    /:::dialogue([\s\S]*?):::/g,
    (match, content) => {
      const lines = content.trim().split('\n').filter((line) => line.trim())
      let html = '<div class="dialogue">'
      
      lines.forEach((line) => {
        const userMatch = line.match(/^用户[：:]\s*(.*)/)
        const assistantMatch = line.match(/^(?:AI|助手)[：:]\s*(.*)/)
        
        if (userMatch) {
          html += `<div class="dialogue-item user"><div class="dialogue-bubble">${userMatch[1]}</div></div>`
        } else if (assistantMatch) {
          html += `<div class="dialogue-item assistant"><div class="dialogue-bubble">${assistantMatch[1]}</div></div>`
        }
      })
      
      html += '</div>'
      return html
    }
  )
  
  processed = processed.replace(
    /\[\^([^\]]+)\]/g,
    (match, id) => {
      return `<sup><a href="#footnote-${id}" id="ref-${id}">[${id}]</a></sup>`
    }
  )
  
  const footnotes: string[] = []
  processed = processed.replace(
    /^\[\^([^\]]+)\]:\s*(.*)$/gm,
    (match, id, text) => {
      footnotes.push(`<div class="footnote-item" id="footnote-${id}">[${id}] ${text}</div>`)
      return ''
    }
  )
  
  if (footnotes.length > 0) {
    processed += `<div class="footnote">${footnotes.join('')}</div>`
  }
  
  let html = marked.parse(processed) as string
  
  html = html.replace(
    /<blockquote>\s*<p>\[!(tip|note|warning|danger|info)\]\s*(.*?)<\/p>\s*<\/blockquote>/g,
    (match, type, content) => {
      const titles: Record<string, string> = {
        tip: '💡 提示',
        note: 'ℹ️ 注意',
        warning: '⚠️ 警告',
        danger: '🚫 危险',
        info: '📝 信息',
      }
      return `<div class="admonition ${type}"><div class="admonition-title">${titles[type]}</div><p>${content}</p></div>`
    }
  )
  
  return html
}

export function parseMarkdown(content: string): string {
  return parseExtendedMarkdown(content)
}
