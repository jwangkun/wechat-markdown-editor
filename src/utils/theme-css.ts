import { ThemeConfig, FontSize, BackgroundType, LayoutType } from '@/types'

export function generateThemeCSS(
  theme: ThemeConfig,
  fontSize: FontSize,
  backgroundType: BackgroundType,
  layout: LayoutType = 'default'
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

  function generateLayoutStyles(theme: ThemeConfig, layout: LayoutType): string {
    switch (layout) {
      case 'elegant':
        return `
          .wechat-content h1 {
            text-align: center;
            border-bottom: 3px solid ${theme.colors.primary};
            padding-bottom: 0.5em;
            position: relative;
          }
          .wechat-content h1::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: ${theme.colors.secondary};
          }
          .wechat-content h2 {
            border-left: 5px solid ${theme.colors.primary};
            padding-left: 1em;
            background: linear-gradient(90deg, ${theme.colors.quote} 0%, transparent 100%);
            padding: 0.5em 1em;
          }
          .wechat-content h3 {
            color: ${theme.colors.primary};
            border-bottom: 1px dashed ${theme.colors.border};
            padding-bottom: 0.3em;
          }
          .wechat-content blockquote {
            border-left: none;
            background: ${theme.colors.quote};
            padding: 1.5em;
            position: relative;
          }
          .wechat-content blockquote::before {
            content: '"';
            font-size: 4em;
            color: ${theme.colors.primary};
            opacity: 0.3;
            position: absolute;
            top: -0.2em;
            left: 0.2em;
          }
          .wechat-content ul li::marker {
            content: '◆';
            color: ${theme.colors.primary};
            font-size: 0.6em;
          }
        `

      case 'modern':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2.2em;
            background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            border: none;
            padding: 0.5em 0;
          }
          .wechat-content h2 {
            text-align: center;
            border: none;
            padding: 0.3em 0;
            position: relative;
          }
          .wechat-content h2::before,
          .wechat-content h2::after {
            content: '—';
            color: ${theme.colors.primary};
            margin: 0 0.5em;
          }
          .wechat-content h3 {
            color: ${theme.colors.text};
            font-size: 1.4em;
            padding: 0.3em 0.5em;
            background: ${theme.colors.primary};
            color: white;
            border-radius: 4px;
            display: inline-block;
          }
          .wechat-content p {
            text-align: left;
            line-height: 2;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, ${theme.colors.quote} 0%, ${theme.colors.code} 100%);
            border-radius: 8px;
            padding: 1.5em;
          }
          .wechat-content hr {
            height: 4px;
            background: linear-gradient(to right, transparent, ${theme.colors.primary}, transparent);
            border-radius: 2px;
          }
          .wechat-content table {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .wechat-content th {
            background: ${theme.colors.primary};
          }
        `

      case 'classic':
        return `
          .wechat-content h1 {
            text-align: left;
            font-size: 1.8em;
            border-bottom: 2px solid ${theme.colors.text};
            padding-bottom: 0.3em;
          }
          .wechat-content h2 {
            font-size: 1.6em;
            border-left: 6px solid ${theme.colors.primary};
            padding-left: 0.8em;
            color: ${theme.colors.primary};
          }
          .wechat-content h3 {
            font-size: 1.3em;
            font-weight: bold;
            border-bottom: 1px solid ${theme.colors.border};
            padding-bottom: 0.2em;
          }
          .wechat-content p {
            text-align: justify;
            text-indent: 2em;
            line-height: 1.8;
          }
          .wechat-content blockquote {
            border-left: 3px solid ${theme.colors.primary};
            background: ${theme.colors.quote};
            font-style: italic;
          }
          .wechat-content ul, .wechat-content ol {
            padding-left: 2.5em;
          }
          .wechat-content li {
            margin: 0.6em 0;
          }
          .wechat-content hr {
            border: none;
            border-top: 1px solid ${theme.colors.border};
            margin: 2em 0;
          }
        `

      case 'minimal':
        return `
          .wechat-content h1 {
            text-align: left;
            font-size: 1.6em;
            border: none;
            padding: 0;
            margin-bottom: 0.5em;
            font-weight: 300;
            letter-spacing: 2px;
          }
          .wechat-content h2 {
            border: none;
            padding: 0;
            font-size: 1.4em;
            font-weight: 300;
            color: ${theme.colors.primary};
            margin-top: 1em;
          }
          .wechat-content h3 {
            border: none;
            padding: 0;
            color: ${theme.colors.text};
            font-weight: 400;
          }
          .wechat-content p {
            text-align: left;
            margin: 0.8em 0;
            color: ${theme.colors.text};
          }
          .wechat-content blockquote {
            border: none;
            border-left: 2px solid ${theme.colors.primary};
            background: transparent;
            padding: 0.5em 1em;
            color: #666;
          }
          .wechat-content ul, .wechat-content ol {
            padding-left: 1.5em;
          }
          .wechat-content hr {
            border: none;
            border-top: 1px solid ${theme.colors.border};
            width: 50%;
            margin: 2em auto;
          }
          .wechat-content code {
            background: transparent;
            border: 1px solid ${theme.colors.border};
            padding: 0.1em 0.3em;
          }
        `

      case 'magazine':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2em;
            border: none;
            position: relative;
          }
          .wechat-content h1::first-letter {
            font-size: 3em;
            float: left;
            line-height: 1;
            padding-right: 0.1em;
            color: ${theme.colors.primary};
            font-weight: bold;
          }
          .wechat-content h2 {
            text-align: center;
            border: none;
            padding: 0.5em;
            border-top: 2px solid ${theme.colors.primary};
            border-bottom: 2px solid ${theme.colors.primary};
            margin: 1.5em 0;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            color: ${theme.colors.primary};
            text-align: left;
          }
          .wechat-content p {
            text-align: justify;
            column-count: 2;
            column-gap: 2em;
          }
          .wechat-content blockquote {
            border: none;
            background: ${theme.colors.quote};
            padding: 2em;
            text-align: center;
            font-size: 1.1em;
            font-style: italic;
            border-radius: 4px;
            margin: 2em 0;
          }
          .wechat-content ul {
            list-style: none;
            padding: 0;
          }
          .wechat-content ul li {
            padding-left: 1.5em;
            position: relative;
          }
          .wechat-content ul li::before {
            content: '●';
            position: absolute;
            left: 0;
            color: ${theme.colors.primary};
          }
        `

      case 'news':
        return `
          .wechat-content h1 {
            text-align: left;
            font-size: 2em;
            border: none;
            padding-bottom: 0.2em;
          }
          .wechat-content h1::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            background: ${theme.colors.primary};
            margin-top: 0.3em;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border: none;
            background: ${theme.colors.primary};
            color: white;
            padding: 0.3em 0.5em;
            margin: 1.5em 0 1em 0;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            font-weight: bold;
            color: ${theme.colors.text};
            border-left: 3px solid ${theme.colors.primary};
            padding-left: 0.5em;
          }
          .wechat-content p {
            text-align: left;
            line-height: 1.8;
          }
          .wechat-content blockquote {
            border: none;
            background: ${theme.colors.quote};
            padding: 1em;
            border-radius: 0 8px 8px 8px;
          }
          .wechat-content table {
            border: 2px solid ${theme.colors.primary};
          }
          .wechat-content th {
            background: ${theme.colors.primary};
            border-bottom: 2px solid ${theme.colors.primary};
          }
          .wechat-content td {
            border: 1px solid ${theme.colors.border};
          }
        `

      case 'card':
        return `
          .wechat-content h1 {
            text-align: center;
            border: none;
            padding: 0.5em;
            background: ${theme.colors.primary};
            color: white;
            border-radius: 8px;
          }
          .wechat-content h2 {
            border: none;
            padding: 0.5em 1em;
            background: ${theme.colors.quote};
            border-left: 4px solid ${theme.colors.primary};
            border-radius: 0 8px 8px 0;
          }
          .wechat-content h3 {
            border: none;
            padding: 0.5em;
            background: linear-gradient(135deg, ${theme.colors.primary}22, ${theme.colors.secondary}22);
            border-radius: 4px;
            color: ${theme.colors.primary};
          }
          .wechat-content p {
            background: white;
            padding: 1em;
            border-radius: 8px;
            border: 1px solid ${theme.colors.border};
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            margin: 1em 0;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, ${theme.colors.quote}, ${theme.colors.code});
            padding: 1.5em;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .wechat-content ul li {
            background: white;
            padding: 0.8em 1em;
            margin: 0.5em 0;
            border-radius: 4px;
            border: 1px solid ${theme.colors.border};
            list-style: none;
          }
          .wechat-content ul li::before {
            content: '✓';
            color: ${theme.colors.primary};
            margin-right: 0.5em;
          }
          .wechat-content table {
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .wechat-content img {
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
        `

      default: // default
        return `
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
          .wechat-content blockquote {
            margin: 1.5em 0;
            padding: 1em 1.5em;
            background-color: ${theme.colors.quote};
            border-left: 4px solid ${theme.colors.primary};
            color: #666;
          }
        `
    }
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

    ${generateLayoutStyles(theme, layout)}

    .wechat-content h4,
    .wechat-content h3,
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
