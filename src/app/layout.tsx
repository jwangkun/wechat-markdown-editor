import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '微信公众号 Markdown 编辑器',
  description: '专业的微信公众号内容排版工具，支持 38 种精美主题',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
