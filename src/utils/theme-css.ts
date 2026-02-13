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
            font-size: 2em;
            font-weight: 300;
            letter-spacing: 4px;
            text-transform: uppercase;
            border: none;
            padding: 1em 0;
            position: relative;
            margin-bottom: 1.5em;
          }
          .wechat-content h1::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: ${theme.colors.primary};
          }
          .wechat-content h1::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: ${theme.colors.secondary};
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border: none;
            padding: 0.8em 1em;
            background: linear-gradient(90deg, ${theme.colors.primary}08 0%, ${theme.colors.primary}15 50%, ${theme.colors.primary}08 100%);
            border-left: 4px solid ${theme.colors.primary};
            border-radius: 0 4px 4px 0;
            margin: 1.5em 0 1em 0;
            position: relative;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            color: ${theme.colors.primary};
            border: none;
            padding: 0.5em 0;
            position: relative;
            padding-left: 1.5em;
          }
          .wechat-content h3::before {
            content: '◆';
            position: absolute;
            left: 0;
            font-size: 0.6em;
            top: 50%;
            transform: translateY(-50%);
            color: ${theme.colors.secondary};
          }
          .wechat-content p {
            text-align: justify;
            line-height: 2;
            margin: 1.2em 0;
            text-indent: 0;
          }
          .wechat-content p:first-of-type::first-letter {
            font-size: 3em;
            float: left;
            line-height: 1;
            padding-right: 0.1em;
            color: ${theme.colors.primary};
            font-weight: bold;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, ${theme.colors.quote} 0%, ${theme.colors.code} 100%);
            padding: 1.5em 2em;
            border-radius: 8px;
            position: relative;
            margin: 2em 0;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          }
          .wechat-content blockquote::before {
            content: '"';
            font-size: 6em;
            color: ${theme.colors.primary};
            opacity: 0.15;
            position: absolute;
            top: -0.2em;
            left: 0.2em;
            font-family: Georgia, serif;
          }
          .wechat-content blockquote::after {
            content: '"';
            font-size: 6em;
            color: ${theme.colors.primary};
            opacity: 0.15;
            position: absolute;
            bottom: -0.5em;
            right: 0.2em;
            font-family: Georgia, serif;
          }
          .wechat-content ul {
            list-style: none;
            padding-left: 0;
          }
          .wechat-content ul li {
            padding: 0.6em 0 0.6em 2em;
            position: relative;
            border-bottom: 1px dashed ${theme.colors.border};
          }
          .wechat-content ul li::before {
            content: '○';
            position: absolute;
            left: 0;
            color: ${theme.colors.primary};
            font-size: 0.8em;
          }
          .wechat-content ol {
            counter-reset: item;
            list-style: none;
            padding-left: 0;
          }
          .wechat-content ol li {
            padding: 0.6em 0 0.6em 2.5em;
            position: relative;
            counter-increment: item;
          }
          .wechat-content ol li::before {
            content: counter(item, decimal-leading-zero);
            position: absolute;
            left: 0;
            color: ${theme.colors.primary};
            font-weight: bold;
            font-size: 0.9em;
          }
          .wechat-content hr {
            border: none;
            height: 1px;
            background: linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent);
            margin: 3em 0;
          }
          .wechat-content table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            margin: 1.5em 0;
          }
          .wechat-content th {
            background: ${theme.colors.primary};
            color: white;
            padding: 1em;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 0.85em;
          }
          .wechat-content td {
            border: 1px solid ${theme.colors.border};
            padding: 0.8em 1em;
          }
          .wechat-content tr:nth-child(even) td {
            background: ${theme.colors.quote};
          }
          .wechat-content tr:last-child td:first-child {
            border-bottom-left-radius: 8px;
          }
          .wechat-content tr:last-child td:last-child {
            border-bottom-right-radius: 8px;
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: ${theme.colors.code};
            padding: 0.2em 0.5em;
            border-radius: 4px;
            font-size: 0.9em;
            color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.border};
          }
          .wechat-content pre {
            background: ${theme.colors.code};
            padding: 1.5em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5em 0;
            position: relative;
            border: 1px solid ${theme.colors.border};
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 0;
            right: 0;
            background: ${theme.colors.primary};
            color: white;
            padding: 0.2em 0.8em;
            font-size: 0.7em;
            border-radius: 0 8px 0 4px;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: ${theme.colors.text};
          }
          .wechat-content img {
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            margin: 1.5em auto;
          }
          .wechat-content .card {
            background: white;
            border-radius: 12px;
            padding: 1.5em;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid ${theme.colors.border};
            margin: 1.5em 0;
          }
        `

      case 'modern':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2.4em;
            font-weight: 700;
            border: none;
            padding: 1em 0;
            background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
          }
          .wechat-content h1::after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
            margin: 0.5em auto 0;
            border-radius: 2px;
          }
          .wechat-content h2 {
            font-size: 1.6em;
            border: none;
            padding: 0.6em 1em;
            background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
            color: white;
            border-radius: 8px;
            margin: 1.5em 0 1em 0;
            text-align: center;
          }
          .wechat-content h3 {
            font-size: 1.3em;
            color: ${theme.colors.text};
            border: none;
            padding: 0.5em 1em;
            background: ${theme.colors.quote};
            border-radius: 6px;
            display: inline-block;
            margin-top: 1.5em;
          }
          .wechat-content p {
            text-align: left;
            line-height: 2;
            margin: 1em 0;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, ${theme.colors.quote} 0%, ${theme.colors.code} 100%);
            padding: 1.5em 2em;
            border-radius: 12px;
            position: relative;
            margin: 2em 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          .wechat-content blockquote::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.secondary});
            border-radius: 12px 0 0 12px;
          }
          .wechat-content ul li {
            padding: 0.5em 0;
            position: relative;
            padding-left: 1.8em;
          }
          .wechat-content ul li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.9em;
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
            border-radius: 50%;
          }
          .wechat-content hr {
            height: 3px;
            background: linear-gradient(90deg, transparent, ${theme.colors.primary}, ${theme.colors.secondary}, transparent);
            border-radius: 2px;
            border: none;
            margin: 2.5em 0;
          }
          .wechat-content table {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            border-collapse: separate;
            border-spacing: 0;
          }
          .wechat-content th {
            background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
            color: white;
            padding: 1em;
            font-weight: 600;
          }
          .wechat-content td {
            border: 1px solid ${theme.colors.border};
            padding: 0.8em 1em;
          }
          .wechat-content tr:nth-child(even) td {
            background: ${theme.colors.quote};
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15);
            padding: 0.2em 0.5em;
            border-radius: 4px;
            font-size: 0.9em;
            color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary}30;
          }
          .wechat-content pre {
            background: linear-gradient(135deg, #1e1e1e, #2d2d2d);
            padding: 1.5em;
            border-radius: 12px;
            overflow-x: auto;
            margin: 1.5em 0;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 10px;
            right: 10px;
            background: ${theme.colors.primary};
            color: white;
            padding: 0.2em 0.6em;
            font-size: 0.65em;
            border-radius: 4px;
            text-transform: uppercase;
            opacity: 0.8;
          }
          .wechat-content pre code {
            background: transparent;
            color: #d4d4d4;
          }
          .wechat-content img {
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
            margin: 1.5em auto;
          }
          .wechat-content .card {
            background: linear-gradient(135deg, white, ${theme.colors.quote});
            border-radius: 16px;
            padding: 2em;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            border: 1px solid ${theme.colors.border};
            margin: 1.5em 0;
          }
          .wechat-content .progress-item {
            margin: 0.8em 0;
          }
          .wechat-content .progress-bar {
            height: 8px;
            background: ${theme.colors.border};
            border-radius: 4px;
            overflow: hidden;
          }
          .wechat-content .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
            border-radius: 4px;
          }
        `

      case 'classic':
        return `
          .wechat-content h1 {
            text-align: left;
            font-size: 2em;
            font-weight: bold;
            border: none;
            padding-bottom: 0.3em;
            border-bottom: 3px solid ${theme.colors.text};
            margin-bottom: 1em;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            font-weight: bold;
            border: none;
            border-left: 6px solid ${theme.colors.primary};
            padding-left: 1em;
            color: ${theme.colors.primary};
            margin: 1.5em 0 1em 0;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            font-weight: bold;
            border: none;
            border-bottom: 1px solid ${theme.colors.border};
            padding-bottom: 0.3em;
            color: ${theme.colors.text};
          }
          .wechat-content p {
            text-align: justify;
            text-indent: 2em;
            line-height: 1.9;
            margin: 1em 0;
          }
          .wechat-content p:first-of-type::first-letter {
            font-size: 3.2em;
            float: left;
            line-height: 1;
            padding-right: 0.08em;
            color: ${theme.colors.primary};
            font-weight: bold;
            font-family: Georgia, 'Times New Roman', serif;
          }
          .wechat-content blockquote {
            border: none;
            border-left: 4px solid ${theme.colors.primary};
            background: ${theme.colors.quote};
            padding: 1.2em 1.5em;
            font-style: italic;
            margin: 1.5em 0;
            position: relative;
          }
          .wechat-content blockquote::before {
            content: '“';
            font-size: 3em;
            color: ${theme.colors.primary};
            opacity: 0.3;
            position: absolute;
            top: -0.1em;
            left: 0.3em;
            font-family: Georgia, serif;
          }
          .wechat-content ul, .wechat-content ol {
            padding-left: 2.5em;
          }
          .wechat-content li {
            margin: 0.6em 0;
            line-height: 1.8;
          }
          .wechat-content ul li::marker {
            color: ${theme.colors.primary};
          }
          .wechat-content hr {
            border: none;
            border-top: 2px solid ${theme.colors.border};
            margin: 2.5em 0;
          }
          .wechat-content hr::before {
            content: '§';
            display: block;
            text-align: center;
            margin-top: -0.7em;
            color: ${theme.colors.primary};
            background: ${theme.colors.background};
            width: 30px;
            margin-left: auto;
            margin-right: auto;
          }
          .wechat-content table {
            border: 2px solid ${theme.colors.text};
            border-collapse: collapse;
            width: 100%;
            margin: 1.5em 0;
          }
          .wechat-content th {
            background: ${theme.colors.text};
            color: white;
            padding: 0.8em;
            font-weight: bold;
            border: 1px solid ${theme.colors.text};
          }
          .wechat-content td {
            border: 1px solid ${theme.colors.border};
            padding: 0.6em 0.8em;
          }
          .wechat-content tr:nth-child(even) td {
            background: ${theme.colors.quote};
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: ${theme.colors.code};
            padding: 0.15em 0.4em;
            border-radius: 2px;
            font-size: 0.9em;
            color: #c7254e;
            border: 1px solid ${theme.colors.border};
          }
          .wechat-content pre {
            background: ${theme.colors.code};
            padding: 1.2em;
            border-radius: 4px;
            overflow-x: auto;
            margin: 1.5em 0;
            border-left: 4px solid ${theme.colors.primary};
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: ${theme.colors.text};
          }
          .wechat-content img {
            border: 1px solid ${theme.colors.border};
            padding: 4px;
            background: white;
            margin: 1em auto;
          }
        `

      case 'minimal':
        return `
          .wechat-content h1 {
            text-align: left;
            font-size: 1.8em;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
            border: none;
            padding: 0;
            margin-bottom: 0.8em;
            color: ${theme.colors.text};
          }
          .wechat-content h2 {
            border: none;
            padding: 0;
            font-size: 1.4em;
            font-weight: 300;
            color: ${theme.colors.primary};
            margin-top: 1.5em;
            letter-spacing: 1px;
          }
          .wechat-content h3 {
            border: none;
            padding: 0;
            font-size: 1.1em;
            font-weight: 400;
            color: ${theme.colors.text};
          }
          .wechat-content p {
            text-align: left;
            margin: 1em 0;
            color: ${theme.colors.text};
            line-height: 1.9;
          }
          .wechat-content blockquote {
            border: none;
            border-left: 2px solid ${theme.colors.primary};
            background: transparent;
            padding: 0.5em 1.5em;
            color: #888;
            font-style: italic;
            margin: 1.5em 0;
          }
          .wechat-content ul, .wechat-content ol {
            padding-left: 1.5em;
          }
          .wechat-content li {
            margin: 0.5em 0;
            color: ${theme.colors.text};
          }
          .wechat-content hr {
            border: none;
            border-top: 1px solid ${theme.colors.border};
            width: 30%;
            margin: 2.5em auto;
          }
          .wechat-content table {
            border: none;
            border-collapse: collapse;
            width: 100%;
          }
          .wechat-content th {
            background: transparent;
            border-bottom: 2px solid ${theme.colors.primary};
            color: ${theme.colors.text};
            padding: 0.8em;
            font-weight: 500;
            text-align: left;
          }
          .wechat-content td {
            border: none;
            border-bottom: 1px solid ${theme.colors.border};
            padding: 0.8em;
          }
          .wechat-content code {
            background: transparent;
            border: 1px solid ${theme.colors.border};
            padding: 0.1em 0.4em;
            font-size: 0.9em;
            color: ${theme.colors.primary};
          }
          .wechat-content pre {
            background: transparent;
            padding: 1em 0;
            border: none;
            border-left: 2px solid ${theme.colors.border};
            margin: 1.5em 0;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
          }
          .wechat-content img {
            margin: 1.5em auto;
          }
        `

      case 'tech':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2em;
            font-weight: 700;
            border: none;
            padding: 0.8em 0;
            background: linear-gradient(90deg, #1a1a2e, #16213e);
            color: #00ff88;
            letter-spacing: 2px;
            border-radius: 4px;
            margin-bottom: 1em;
            font-family: 'SF Mono', 'Monaco', monospace;
          }
          .wechat-content h2 {
            font-size: 1.4em;
            border: none;
            padding: 0.6em 1em;
            background: #1a1a2e;
            color: #00ff88;
            border-radius: 4px 4px 0 0;
            margin: 1.5em 0 0 0;
            font-family: 'SF Mono', 'Monaco', monospace;
            position: relative;
          }
          .wechat-content h2::after {
            content: '';
            position: absolute;
            right: 1em;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            background: #00ff88;
            border-radius: 2px;
          }
          .wechat-content h3 {
            font-size: 1.1em;
            color: #00d4ff;
            border: none;
            padding: 0.4em 0.8em;
            background: #0f0f23;
            border-radius: 4px;
            font-family: 'SF Mono', 'Monaco', monospace;
            display: inline-block;
          }
          .wechat-content p {
            text-align: left;
            line-height: 1.9;
            margin: 1em 0;
            font-family: 'SF Mono', 'Monaco', monospace;
            font-size: 0.95em;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
            padding: 1.5em;
            border-radius: 8px;
            margin: 1.5em 0;
            border-left: 4px solid #00ff88;
            color: #a0a0a0;
          }
          .wechat-content blockquote::before {
            content: '> ';
            color: #00ff88;
            font-family: 'SF Mono', 'Monaco', monospace;
          }
          .wechat-content ul {
            list-style: none;
            padding-left: 0;
          }
          .wechat-content ul li {
            padding: 0.5em 0 0.5em 1.5em;
            position: relative;
            font-family: 'SF Mono', 'Monaco', monospace;
            font-size: 0.95em;
          }
          .wechat-content ul li::before {
            content: '›';
            position: absolute;
            left: 0;
            color: #00ff88;
            font-weight: bold;
          }
          .wechat-content hr {
            border: none;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff88, transparent);
            margin: 2em 0;
          }
          .wechat-content table {
            background: #0f0f23;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #2a2a4a;
          }
          .wechat-content th {
            background: #1a1a2e;
            color: #00ff88;
            padding: 1em;
            font-weight: 500;
            border-bottom: 2px solid #00ff88;
            font-family: 'SF Mono', 'Monaco', monospace;
          }
          .wechat-content td {
            border: 1px solid #2a2a4a;
            padding: 0.8em 1em;
            color: #d0d0d0;
            font-family: 'SF Mono', 'Monaco', monospace;
            font-size: 0.9em;
          }
          .wechat-content tr:nth-child(even) td {
            background: #0a0a15;
          }
          .wechat-content code {
            font-family: 'SF Mono', 'Monaco', monospace;
            background: #0f0f23;
            padding: 0.2em 0.5em;
            border-radius: 4px;
            font-size: 0.9em;
            color: #00d4ff;
            border: 1px solid #2a2a4a;
          }
          .wechat-content pre {
            background: #0f0f23;
            padding: 1.5em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5em 0;
            border: 1px solid #2a2a4a;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 8px;
            background: #00ff88;
            color: #0f0f23;
            padding: 0.15em 0.5em;
            font-size: 0.6em;
            border-radius: 3px;
            font-family: 'SF Mono', 'Monaco', monospace;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #d4d4d4;
          }
          .wechat-content img {
            border-radius: 8px;
            border: 2px solid #2a2a4a;
            margin: 1.5em auto;
          }
          .wechat-content .terminal-window {
            background: #0f0f23;
            border-radius: 8px;
            overflow: hidden;
            margin: 1.5em 0;
            border: 1px solid #2a2a4a;
          }
          .wechat-content .terminal-header {
            background: #1a1a2e;
            padding: 0.5em 1em;
            display: flex;
            gap: 6px;
          }
          .wechat-content .terminal-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          .wechat-content .terminal-dot.red { background: #ff5f56; }
          .wechat-content .terminal-dot.yellow { background: #ffbd2e; }
          .wechat-content .terminal-dot.green { background: #27ca40; }
        `

      case 'nature':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2em;
            font-weight: 400;
            border: none;
            padding: 1em 0;
            color: #2d5a27;
            position: relative;
          }
          .wechat-content h1::before {
            content: '🌿';
            display: block;
            font-size: 1.5em;
            margin-bottom: 0.3em;
          }
          .wechat-content h1::after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #4a7c42, #8bc34a, #4a7c42);
            margin: 0.5em auto 0;
            border-radius: 2px;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border: none;
            padding: 0.6em 1em;
            background: linear-gradient(90deg, #4a7c4233, #8bc34a33);
            border-left: 4px solid #4a7c42;
            color: #2d5a27;
            border-radius: 0 6px 6px 0;
            margin: 1.5em 0 1em 0;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            color: #4a7c42;
            border: none;
            padding: 0.4em 0;
            position: relative;
            padding-left: 1.5em;
          }
          .wechat-content h3::before {
            content: '♦';
            position: absolute;
            left: 0;
            color: #8bc34a;
            font-size: 0.7em;
          }
          .wechat-content p {
            text-align: left;
            line-height: 2;
            margin: 1em 0;
            color: #3d3d3d;
          }
          .wechat-content p:first-of-type::first-letter {
            font-size: 3em;
            float: left;
            line-height: 1;
            padding-right: 0.08em;
            color: #4a7c42;
            font-weight: 300;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
            padding: 1.5em 2em;
            border-radius: 12px;
            margin: 1.5em 0;
            position: relative;
          }
          .wechat-content blockquote::before {
            content: '🌱';
            font-size: 2em;
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            opacity: 0.3;
          }
          .wechat-content ul li {
            padding: 0.5em 0 0.5em 1.8em;
            position: relative;
          }
          .wechat-content ul li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #4a7c42;
            font-weight: bold;
          }
          .wechat-content hr {
            border: none;
            height: 2px;
            background: linear-gradient(90deg, transparent, #4a7c42, #8bc34a, #4a7c42, transparent);
            margin: 2em 0;
          }
          .wechat-content table {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(74, 124, 66, 0.15);
          }
          .wechat-content th {
            background: linear-gradient(135deg, #4a7c42, #2d5a27);
            color: white;
            padding: 1em;
          }
          .wechat-content td {
            border: 1px solid #c8e6c9;
            padding: 0.8em 1em;
          }
          .wechat-content tr:nth-child(even) td {
            background: #e8f5e9;
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: #e8f5e9;
            padding: 0.2em 0.5em;
            border-radius: 4px;
            font-size: 0.9em;
            color: #2d5a27;
            border: 1px solid #c8e6c9;
          }
          .wechat-content pre {
            background: linear-gradient(135deg, #1b3d1b, #2d5a27);
            padding: 1.5em;
            border-radius: 12px;
            overflow-x: auto;
            margin: 1.5em 0;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 8px;
            background: #8bc34a;
            color: #1b3d1b;
            padding: 0.2em 0.6em;
            font-size: 0.6em;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #c8e6c9;
          }
          .wechat-content img {
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(74, 124, 66, 0.2);
            margin: 1.5em auto;
          }
          .wechat-content .leaf {
            position: relative;
          }
          .wechat-content .leaf::before {
            content: '🍃';
            position: absolute;
            right: 0;
            top: 0;
            opacity: 0.2;
            font-size: 2em;
          }
        `

      case 'night':
        return `
          .wechat-content {
            background: #0d1117;
            color: #c9d1d9;
          }
          .wechat-content h1 {
            text-align: center;
            font-size: 2em;
            font-weight: 500;
            border: none;
            padding: 1em 0;
            color: #f0f6fc;
            letter-spacing: 1px;
          }
          .wechat-content h1::after {
            content: '';
            display: block;
            width: 50px;
            height: 2px;
            background: #58a6ff;
            margin: 0.5em auto 0;
          }
          .wechat-content h2 {
            font-size: 1.4em;
            border: none;
            padding: 0.6em 1em;
            background: #161b22;
            color: #58a6ff;
            border-radius: 6px;
            margin: 1.5em 0 1em 0;
            border-left: 3px solid #58a6ff;
          }
          .wechat-content h3 {
            font-size: 1.1em;
            color: #8b949e;
            border: none;
            padding: 0.4em 0;
            border-bottom: 1px dashed #30363d;
          }
          .wechat-content p {
            text-align: left;
            line-height: 1.9;
            margin: 1em 0;
            color: #c9d1d9;
          }
          .wechat-content blockquote {
            border: none;
            background: #161b22;
            padding: 1.2em 1.5em;
            border-radius: 8px;
            margin: 1.5em 0;
            border-left: 4px solid #58a6ff;
            color: #8b949e;
          }
          .wechat-content blockquote::before {
            content: '"';
            color: #58a6ff;
            font-size: 2em;
            opacity: 0.5;
          }
          .wechat-content ul li {
            padding: 0.4em 0 0.4em 1.5em;
            position: relative;
            color: #c9d1d9;
          }
          .wechat-content ul li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #58a6ff;
          }
          .wechat-content hr {
            border: none;
            height: 1px;
            background: linear-gradient(90deg, transparent, #30363d, transparent);
            margin: 2em 0;
          }
          .wechat-content table {
            background: #161b22;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #30363d;
          }
          .wechat-content th {
            background: #21262d;
            color: #f0f6fc;
            padding: 1em;
            border-bottom: 2px solid #58a6ff;
          }
          .wechat-content td {
            border: 1px solid #30363d;
            padding: 0.8em 1em;
            color: #c9d1d9;
          }
          .wechat-content tr:nth-child(even) td {
            background: #0d1117;
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: #161b22;
            padding: 0.2em 0.5em;
            border-radius: 4px;
            font-size: 0.9em;
            color: #79c0ff;
            border: 1px solid #30363d;
          }
          .wechat-content pre {
            background: #161b22;
            padding: 1.5em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5em 0;
            border: 1px solid #30363d;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 8px;
            background: #58a6ff;
            color: #0d1117;
            padding: 0.15em 0.5em;
            font-size: 0.6em;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #c9d1d9;
          }
          .wechat-content img {
            border-radius: 8px;
            border: 1px solid #30363d;
            margin: 1.5em auto;
          }
          .wechat-content a {
            color: #58a6ff;
            text-decoration: none;
            border-bottom: 1px solid #58a6ff;
          }
          .wechat-content strong {
            color: #f0f6fc;
          }
        `

      case 'royal':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2.2em;
            font-weight: 600;
            border: none;
            padding: 1em 0;
            color: #1a1a1a;
            position: relative;
            letter-spacing: 4px;
            text-transform: uppercase;
          }
          .wechat-content h1::before {
            content: '✦';
            display: block;
            color: #c9a227;
            font-size: 1.2em;
            margin-bottom: 0.3em;
          }
          .wechat-content h1::after {
            content: '';
            display: block;
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent, #c9a227, transparent);
            margin: 0.5em auto 0;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border: none;
            padding: 0.7em 1.2em;
            background: linear-gradient(90deg, #c9a22708, #c9a22715);
            border-left: 4px solid #c9a227;
            color: #1a1a1a;
            margin: 1.5em 0 1em 0;
            position: relative;
          }
          .wechat-content h2::before {
            content: '❧';
            color: #c9a227;
            margin-right: 0.5em;
            font-size: 1.2em;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            color: #8b7355;
            border: none;
            padding: 0.4em 0;
            border-bottom: 2px solid #c9a227;
            display: inline-block;
          }
          .wechat-content p {
            text-align: justify;
            line-height: 2;
            margin: 1em 0;
          }
          .wechat-content p:first-of-type::first-letter {
            font-size: 3.5em;
            float: left;
            line-height: 0.8;
            padding-right: 0.1em;
            color: #c9a227;
            font-weight: 400;
            font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, #faf8f5 0%, #f5f0e6 100%);
            padding: 1.5em 2em;
            border-radius: 4px;
            margin: 1.5em 0;
            border: 1px solid #d4c5a9;
            border-left: 5px solid #c9a227;
            position: relative;
          }
          .wechat-content blockquote::before {
            content: '❝';
            font-size: 4em;
            color: #c9a227;
            opacity: 0.3;
            position: absolute;
            top: -0.2em;
            left: 0.2em;
            font-family: Georgia, serif;
          }
          .wechat-content ul li {
            padding: 0.5em 0 0.5em 1.8em;
            position: relative;
          }
          .wechat-content ul li::before {
            content: '♕';
            position: absolute;
            left: 0;
            color: #c9a227;
            font-size: 0.8em;
          }
          .wechat-content hr {
            border: none;
            height: 1px;
            background: linear-gradient(90deg, transparent, #c9a227, #d4af37, #c9a227, transparent);
            margin: 2.5em 0;
          }
          .wechat-content hr::before {
            content: '✦';
            display: block;
            text-align: center;
            margin-top: -0.6em;
            color: #c9a227;
            background: ${theme.colors.background};
            width: 30px;
            margin-left: auto;
            margin-right: auto;
          }
          .wechat-content table {
            border: 2px solid #c9a227;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(201, 162, 39, 0.15);
          }
          .wechat-content th {
            background: linear-gradient(135deg, #1a1a1a, #333);
            color: #c9a227;
            padding: 1em;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 0.85em;
          }
          .wechat-content td {
            border: 1px solid #d4c5a9;
            padding: 0.8em 1em;
          }
          .wechat-content tr:nth-child(even) td {
            background: #faf8f5;
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: #faf8f5;
            padding: 0.2em 0.5em;
            border-radius: 4px;
            font-size: 0.9em;
            color: #8b7355;
            border: 1px solid #d4c5a9;
          }
          .wechat-content pre {
            background: #1a1a1a;
            padding: 1.5em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5em 0;
            border: 2px solid #c9a227;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 8px;
            background: #c9a227;
            color: #1a1a1a;
            padding: 0.2em 0.6em;
            font-size: 0.6em;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #f5f0e6;
          }
          .wechat-content img {
            border-radius: 4px;
            border: 3px double #c9a227;
            padding: 4px;
            margin: 1.5em auto;
          }
          .wechat-content .card {
            background: linear-gradient(135deg, #faf8f5, #f5f0e6);
            border-radius: 8px;
            padding: 1.5em;
            border: 1px solid #d4c5a9;
            border-left: 4px solid #c9a227;
            margin: 1.5em 0;
            box-shadow: 0 2px 10px rgba(201, 162, 39, 0.1);
          }
        `

      case 'playful':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2.2em;
            font-weight: 700;
            border: none;
            padding: 0.8em 0;
            background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
          }
          .wechat-content h1::after {
            content: '✨';
            display: block;
            font-size: 0.5em;
            margin-top: 0.2em;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border: none;
            padding: 0.6em 1em;
            background: #fff0f0;
            color: #ff6b6b;
            border-radius: 20px;
            margin: 1.5em 0 1em 0;
            text-align: center;
            position: relative;
          }
          .wechat-content h2::before {
            content: '🎨';
            margin-right: 0.3em;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            color: #5f27cd;
            border: none;
            padding: 0.4em 0.8em;
            background: #f0f0ff;
            border-radius: 8px;
            display: inline-block;
          }
          .wechat-content h3::before {
            content: '★ ';
            color: #feca57;
          }
          .wechat-content p {
            text-align: left;
            line-height: 2;
            margin: 1em 0;
          }
          .wechat-content p:first-of-type::first-letter {
            font-size: 2.5em;
            float: left;
            line-height: 1;
            padding-right: 0.1em;
            background: linear-gradient(135deg, #ff6b6b, #feca57);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
          .wechat-content blockquote {
            border: none;
            background: linear-gradient(135deg, #fff5f5, #fffaf0);
            padding: 1.5em 2em;
            border-radius: 20px;
            margin: 1.5em 0;
            position: relative;
            border: 2px dashed #ff9ff3;
          }
          .wechat-content blockquote::before {
            content: '💭';
            font-size: 1.5em;
            position: absolute;
            top: -0.5em;
            left: 1em;
            background: ${theme.colors.background};
            padding: 0 0.3em;
          }
          .wechat-content ul {
            list-style: none;
            padding-left: 0;
          }
          .wechat-content ul li {
            padding: 0.5em 0 0.5em 2em;
            position: relative;
          }
          .wechat-content ul li::before {
            content: '🌈';
            position: absolute;
            left: 0;
          }
          .wechat-content ol {
            counter-reset: item;
            list-style: none;
            padding-left: 0;
          }
          .wechat-content ol li {
            padding: 0.5em 0 0.5em 2.5em;
            position: relative;
            counter-increment: item;
          }
          .wechat-content ol li::before {
            content: counter(item);
            position: absolute;
            left: 0;
            background: linear-gradient(135deg, #ff6b6b, #feca57);
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            text-align: center;
            line-height: 24px;
            font-size: 0.8em;
            font-weight: bold;
          }
          .wechat-content hr {
            border: none;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            border-radius: 2px;
            margin: 2em 0;
          }
          .wechat-content table {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
          }
          .wechat-content th {
            background: linear-gradient(135deg, #ff6b6b, #ff9ff3);
            color: white;
            padding: 1em;
            font-weight: 600;
          }
          .wechat-content td {
            border: 1px solid #ffe0e0;
            padding: 0.8em 1em;
          }
          .wechat-content tr:nth-child(even) td {
            background: #fff5f5;
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: #fff5f5;
            padding: 0.2em 0.5em;
            border-radius: 6px;
            font-size: 0.9em;
            color: #ff6b6b;
            border: 1px solid #ffcccc;
          }
          .wechat-content pre {
            background: linear-gradient(135deg, #2d3436, #636e72);
            padding: 1.5em;
            border-radius: 16px;
            overflow-x: auto;
            margin: 1.5em 0;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 8px;
            background: #feca57;
            color: #2d3436;
            padding: 0.2em 0.6em;
            font-size: 0.6em;
            border-radius: 10px;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #dfe6e9;
          }
          .wechat-content img {
            border-radius: 16px;
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.25);
            margin: 1.5em auto;
          }
          .wechat-content .sticker {
            display: inline-block;
            padding: 0.3em 0.8em;
            background: linear-gradient(135deg, #fff5f5, #fff0f5);
            border-radius: 20px;
            font-size: 0.9em;
          }
        `

      case 'official':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 2em;
            font-weight: 600;
            border: none;
            padding: 1em 0;
            color: #1565c0;
            letter-spacing: 2px;
            position: relative;
          }
          .wechat-content h1::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: #1565c0;
            margin: 0.5em auto 0;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border: none;
            padding: 0.6em 1em;
            background: #e3f2fd;
            color: #1565c0;
            border-left: 4px solid #1565c0;
            margin: 1.5em 0 1em 0;
            font-weight: 500;
          }
          .wechat-content h3 {
            font-size: 1.2em;
            color: #1976d2;
            border: none;
            padding: 0.4em 0;
            border-bottom: 1px solid #bbdefb;
          }
          .wechat-content p {
            text-align: justify;
            line-height: 1.9;
            margin: 1em 0;
            color: #212121;
          }
          .wechat-content blockquote {
            border: none;
            background: #e3f2fd;
            padding: 1.2em 1.5em;
            border-radius: 4px;
            margin: 1.5em 0;
            border-left: 4px solid #1565c0;
            color: #424242;
          }
          .wechat-content ul li {
            padding: 0.4em 0 0.4em 1.5em;
            position: relative;
          }
          .wechat-content ul li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.8em;
            width: 6px;
            height: 6px;
            background: #1565c0;
            border-radius: 50%;
          }
          .wechat-content ol li {
            padding: 0.4em 0 0.4em 0.5em;
          }
          .wechat-content hr {
            border: none;
            height: 1px;
            background: #bbdefb;
            margin: 2em 0;
          }
          .wechat-content table {
            border: 1px solid #1565c0;
            border-radius: 4px;
            overflow: hidden;
          }
          .wechat-content th {
            background: #1565c0;
            color: white;
            padding: 1em;
            font-weight: 500;
          }
          .wechat-content td {
            border: 1px solid #bbdefb;
            padding: 0.8em 1em;
          }
          .wechat-content tr:nth-child(even) td {
            background: #e3f2fd;
          }
          .wechat-content code {
            font-family: ${theme.fonts.code};
            background: #e3f2fd;
            padding: 0.15em 0.4em;
            border-radius: 3px;
            font-size: 0.9em;
            color: #1565c0;
            border: 1px solid #bbdefb;
          }
          .wechat-content pre {
            background: #263238;
            padding: 1.5em;
            border-radius: 4px;
            overflow-x: auto;
            margin: 1.5em 0;
            position: relative;
          }
          .wechat-content pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 8px;
            background: #1565c0;
            color: white;
            padding: 0.15em 0.5em;
            font-size: 0.6em;
            border-radius: 3px;
            text-transform: uppercase;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #eceff1;
          }
          .wechat-content img {
            border: 2px solid #e3f2fd;
            margin: 1em auto;
          }
          .wechat-content a {
            color: #1565c0;
            text-decoration: none;
            border-bottom: 1px solid #1565c0;
          }
          .wechat-content .notice {
            background: #e3f2fd;
            border-left: 4px solid #1565c0;
            padding: 1em 1.5em;
            margin: 1.5em 0;
            border-radius: 0 4px 4px 0;
          }
        `

      case 'zen':
        return `
          .wechat-content h1 {
            text-align: center;
            font-size: 1.8em;
            font-weight: 300;
            border: none;
            padding: 1.5em 0;
            color: #333;
            letter-spacing: 8px;
            text-transform: uppercase;
          }
          .wechat-content h2 {
            font-size: 1.3em;
            border: none;
            padding: 1em 0;
            color: #666;
            text-align: center;
            font-weight: 300;
            letter-spacing: 4px;
            margin: 2em 0 1.5em 0;
            position: relative;
          }
          .wechat-content h2::before,
          .wechat-content h2::after {
            content: '·';
            margin: 0 0.5em;
            color: #ccc;
          }
          .wechat-content h3 {
            font-size: 1.1em;
            color: #555;
            border: none;
            padding: 0.5em 0;
            font-weight: 400;
          }
          .wechat-content p {
            text-align: left;
            line-height: 2.2;
            margin: 1.5em 0;
            color: #444;
          }
          .wechat-content blockquote {
            border: none;
            background: transparent;
            padding: 1.5em 2em;
            margin: 2em 0;
            color: #888;
            font-style: italic;
            text-align: center;
            position: relative;
          }
          .wechat-content blockquote::before {
            content: '';
            display: block;
            width: 30px;
            height: 1px;
            background: #ddd;
            margin: 0 auto 1em;
          }
          .wechat-content blockquote::after {
            content: '';
            display: block;
            width: 30px;
            height: 1px;
            background: #ddd;
            margin: 1em auto 0;
          }
          .wechat-content ul {
            padding-left: 0;
            list-style: none;
            text-align: center;
          }
          .wechat-content ul li {
            padding: 0.5em 0;
            color: #555;
          }
          .wechat-content hr {
            border: none;
            width: 50px;
            height: 1px;
            background: #ddd;
            margin: 3em auto;
          }
          .wechat-content table {
            border: none;
            border-collapse: collapse;
            width: 100%;
          }
          .wechat-content th {
            background: transparent;
            border-bottom: 1px solid #ddd;
            color: #666;
            padding: 1em;
            font-weight: 400;
            text-align: left;
          }
          .wechat-content td {
            border: none;
            border-bottom: 1px solid #eee;
            padding: 1em;
            color: #666;
            text-align: left;
          }
          .wechat-content code {
            background: transparent;
            border: none;
            padding: 0;
            color: #888;
            font-size: 0.95em;
          }
          .wechat-content pre {
            background: transparent;
            padding: 1.5em 0;
            border: none;
            border-left: 1px solid #ddd;
            margin: 1.5em 0 1.5em 1em;
          }
          .wechat-content pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: #666;
          }
          .wechat-content img {
            margin: 2em auto;
          }
          .wechat-content .empty-line {
            height: 2em;
          }
        `

      default:
        return `
          .wechat-content h1 {
            font-size: 1.8em;
            text-align: center;
            border-bottom: 2px solid ${theme.colors.primary};
            padding-bottom: 0.5em;
            margin-bottom: 0.8em;
          }
          .wechat-content h2 {
            font-size: 1.5em;
            border-left: 4px solid ${theme.colors.primary};
            padding-left: 0.8em;
            margin: 1.5em 0 1em 0;
          }
          .wechat-content h3 {
            font-size: 1.3em;
            color: ${theme.colors.primary};
            margin: 1.2em 0 0.8em 0;
          }
          .wechat-content p {
            margin: 1em 0;
            text-align: justify;
            line-height: 1.8;
          }
          .wechat-content blockquote {
            margin: 1.5em 0;
            padding: 1em 1.5em;
            background-color: ${theme.colors.quote};
            border-left: 4px solid ${theme.colors.primary};
            color: #666;
          }
          .wechat-content ul, .wechat-content ol {
            margin: 1em 0;
            padding-left: 2em;
          }
          .wechat-content li {
            margin: 0.5em 0;
          }
          .wechat-content hr {
            border: none;
            height: 2px;
            background: linear-gradient(to right, transparent, ${theme.colors.primary}, transparent);
            margin: 2em 0;
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
          .wechat-content img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 1em auto;
            border-radius: 4px;
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
