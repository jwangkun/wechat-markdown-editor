import { ThemeConfig, FontSize, BackgroundType } from '@/types'

export function generateThemeCSS(
  theme: ThemeConfig,
  fontSize: FontSize,
  backgroundType: BackgroundType
): string {
  const fontSizeMap = {
    small: '14px',
    medium: '15px',
    large: '16px',
  }

  const baseFontSize = fontSizeMap[fontSize]

  let background = ''
  if (backgroundType === 'grid') {
    background = `
      background-image: 
        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
      background-size: 20px 20px;
    `
  }

  return `
    .wechat-content {
      font-family: ${theme.fonts.body};
      font-size: ${baseFontSize};
      color: ${theme.colors.text};
      background-color: ${theme.colors.background};
      line-height: 1.8;
      padding: 20px;
      ${background}
    }

    .wechat-content h1,
    .wechat-content h2,
    .wechat-content h3,
    .wechat-content h4,
    .wechat-content h5,
    .wechat-content h6 {
      font-family: ${theme.fonts.title};
      color: ${theme.colors.text};
      margin-top: 1.5em;
      margin-bottom: 0.8em;
      font-weight: bold;
    }

    .wechat-content h1 {
      font-size: 1.8em;
      text-align: center;
      border-bottom: 2px solid ${theme.colors.primary};
      padding-bottom: 0.5em;
    }

    .wechat-content h2 {
      font-size: 1.5em;
      border-left: 4px solid ${theme.colors.primary};
      padding-left: 0.8em;
    }

    .wechat-content h3 {
      font-size: 1.3em;
      color: ${theme.colors.primary};
    }

    .wechat-content h4 {
      font-size: 1.1em;
    }

    .wechat-content p {
      margin: 1em 0;
      text-align: justify;
    }

    .wechat-content strong {
      color: ${theme.colors.primary};
      font-weight: bold;
    }

    .wechat-content em {
      font-style: italic;
      color: ${theme.colors.secondary};
    }

    .wechat-content a {
      color: ${theme.colors.link};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.link};
    }

    .wechat-content blockquote {
      margin: 1.5em 0;
      padding: 1em 1.5em;
      background-color: ${theme.colors.quote};
      border-left: 4px solid ${theme.colors.primary};
      color: #666;
    }

    .wechat-content code {
      font-family: ${theme.fonts.code};
      background-color: ${theme.colors.code};
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
      color: ${theme.colors.primary};
    }

    .wechat-content pre {
      background-color: ${theme.colors.code};
      padding: 1em;
      border-radius: 5px;
      overflow-x: auto;
      margin: 1.5em 0;
    }

    .wechat-content pre code {
      background-color: transparent;
      padding: 0;
      color: ${theme.colors.text};
    }

    .wechat-content ul,
    .wechat-content ol {
      margin: 1em 0;
      padding-left: 2em;
    }

    .wechat-content li {
      margin: 0.5em 0;
    }

    .wechat-content ul li::marker {
      color: ${theme.colors.primary};
    }

    .wechat-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5em 0;
    }

    .wechat-content th {
      background-color: ${theme.colors.primary};
      color: white;
      padding: 0.8em;
      font-weight: bold;
    }

    .wechat-content td {
      border: 1px solid ${theme.colors.border};
      padding: 0.8em;
    }

    .wechat-content tr:nth-child(even) {
      background-color: ${theme.colors.quote};
    }

    .wechat-content img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1em auto;
      border-radius: 4px;
    }

    .wechat-content hr {
      border: none;
      height: 2px;
      background: linear-gradient(to right, transparent, ${theme.colors.primary}, transparent);
      margin: 2em 0;
    }

    .wechat-content .admonition {
      padding: 1em 1.5em;
      margin: 1.5em 0;
      border-radius: 5px;
      border-left: 4px solid;
    }

    .wechat-content .admonition-title {
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    .wechat-content .admonition.tip {
      background-color: #e3f2fd;
      border-color: #2196f3;
    }

    .wechat-content .admonition.tip .admonition-title {
      color: #1976d2;
    }

    .wechat-content .admonition.note {
      background-color: #f3e5f5;
      border-color: #9c27b0;
    }

    .wechat-content .admonition.note .admonition-title {
      color: #7b1fa2;
    }

    .wechat-content .admonition.warning {
      background-color: #fff3e0;
      border-color: #ff9800;
    }

    .wechat-content .admonition.warning .admonition-title {
      color: #f57c00;
    }

    .wechat-content .admonition.danger {
      background-color: #ffebee;
      border-color: #f44336;
    }

    .wechat-content .admonition.danger .admonition-title {
      color: #d32f2f;
    }

    .wechat-content .gallery {
      display: flex;
      overflow-x: auto;
      gap: 10px;
      padding: 10px 0;
      -webkit-overflow-scrolling: touch;
    }

    .wechat-content .gallery img {
      flex-shrink: 0;
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
    }

    .wechat-content .longimage {
      max-height: 500px;
      overflow-y: auto;
      border: 1px solid ${theme.colors.border};
      border-radius: 5px;
      padding: 10px;
    }

    .wechat-content .dialogue {
      margin: 1.5em 0;
    }

    .wechat-content .dialogue-item {
      display: flex;
      margin: 0.8em 0;
    }

    .wechat-content .dialogue-item.user {
      justify-content: flex-start;
    }

    .wechat-content .dialogue-item.assistant {
      justify-content: flex-end;
    }

    .wechat-content .dialogue-bubble {
      max-width: 70%;
      padding: 0.8em 1.2em;
      border-radius: 15px;
      line-height: 1.5;
    }

    .wechat-content .dialogue-item.user .dialogue-bubble {
      background-color: #95ec69;
      color: #000;
      border-bottom-left-radius: 5px;
    }

    .wechat-content .dialogue-item.assistant .dialogue-bubble {
      background-color: #fff;
      color: #000;
      border: 1px solid #e5e5e5;
      border-bottom-right-radius: 5px;
    }

    .wechat-content .footnote {
      font-size: 0.9em;
      color: #999;
      border-top: 1px solid ${theme.colors.border};
      padding-top: 1em;
      margin-top: 2em;
    }

    .wechat-content .footnote-item {
      margin: 0.5em 0;
    }
  `
}
