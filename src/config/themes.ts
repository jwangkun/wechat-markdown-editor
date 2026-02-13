import { ThemeConfig } from '@/types'

export const layoutConfigs = {
  default: {
    id: 'default',
    name: '默认布局',
    description: '标准微信排版，简洁清晰',
  },
  elegant: {
    id: 'elegant',
    name: '雅致布局',
    description: '左侧边框装饰，精致优雅',
  },
  modern: {
    id: 'modern',
    name: '现代布局',
    description: '大标题背景，时尚简约',
  },
  classic: {
    id: 'classic',
    name: '经典布局',
    description: '传统报纸风格，端庄大气',
  },
  minimal: {
    id: 'minimal',
    name: '极简布局',
    description: '无装饰留白，极简主义',
  },
  magazine: {
    id: 'magazine',
    name: '杂志布局',
    description: '大号首字母，杂志风格',
  },
  news: {
    id: 'news',
    name: '新闻布局',
    description: '分段标题，新闻报道风格',
  },
  card: {
    id: 'card',
    name: '卡片布局',
    description: '内容卡片化，信息模块化',
  },
}

export const builtInThemes: Record<string, ThemeConfig> = {
  default: {
    id: 'default',
    name: '默认主题',
    type: 'built-in',
    description: '微信经典风格，温暖舒适',
    layout: 'default',
    colors: {
      primary: '#07c160',
      secondary: '#576b95',
      text: '#3f3f3f',
      background: '#ffffff',
      border: '#e5e5e5',
      code: '#f6f8fa',
      quote: '#f7f7f7',
      link: '#576b95',
    },
    fonts: {
      title: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
  },
  bytedance: {
    id: 'bytedance',
    name: '字节跳动',
    type: 'built-in',
    description: '科技现代风格，简洁利落',
    layout: 'default',
    colors: {
      primary: '#1890ff',
      secondary: '#52c41a',
      text: '#333333',
      background: '#ffffff',
      border: '#d9d9d9',
      code: '#f5f5f5',
      quote: '#fafafa',
      link: '#1890ff',
    },
    fonts: {
      title: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
  },
  apple: {
    id: 'apple',
    name: '苹果风格',
    type: 'built-in',
    description: '视觉渐变风格，精致优雅',
    layout: 'default',
    colors: {
      primary: '#0071e3',
      secondary: '#0066cc',
      text: '#1d1d1f',
      background: '#fbfbfd',
      border: '#d2d2d7',
      code: '#f5f5f7',
      quote: '#f5f5f7',
      link: '#0066cc',
    },
    fonts: {
      title: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto',
      body: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto',
      code: '"SF Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
    },
  },
  sports: {
    id: 'sports',
    name: '活力运动',
    type: 'built-in',
    description: '活力动感风格，充满能量',
    layout: 'default',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      text: '#2d2d2d',
      background: '#ffffff',
      border: '#e0e0e0',
      code: '#fff3e0',
      quote: '#fff8e1',
      link: '#ff6b35',
    },
    fonts: {
      title: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
  },
  chinese: {
    id: 'chinese',
    name: '中国风',
    type: 'built-in',
    description: '古典雅致风格，书卷气息',
    layout: 'default',
    colors: {
      primary: '#c23531',
      secondary: '#ca8a04',
      text: '#333333',
      background: '#fffbf0',
      border: '#d4c4a8',
      code: '#f5f0e1',
      quote: '#faf6ed',
      link: '#c23531',
    },
    fonts: {
      title: '"Noto Serif SC", "Source Han Serif SC", "Source Han Serif CN", serif',
      body: '"Noto Sans SC", "Source Han Sans SC", "Source Han Sans CN", sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
  },
  cyber: {
    id: 'cyber',
    name: '赛博朋克',
    type: 'built-in',
    description: '未来科技风格，霓虹光影',
    layout: 'default',
    colors: {
      primary: '#00f5ff',
      secondary: '#ff00ff',
      text: '#e0e0e0',
      background: '#0a0e27',
      border: '#2a2f4f',
      code: '#1a1f3a',
      quote: '#151a30',
      link: '#00f5ff',
    },
    fonts: {
      title: '"Orbitron", "Rajdhani", -apple-system, BlinkMacSystemFont, sans-serif',
      body: '"Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
      code: '"Fira Code", "SFMono-Regular", Consolas, monospace',
    },
  },
}

export const styleTemplates = {
  minimal: {
    name: '简约',
    description: '纯色文字，无装饰',
  },
  focus: {
    name: '聚焦',
    description: '居中对称，双横线',
  },
  elegant: {
    name: '精致',
    description: '左边框递减，渐变',
  },
  bold: {
    name: '醒目',
    description: '满底色标题，投影',
  },
}

export const colorTones = {
  gold: { name: '古铜金', color: '#b8860b' },
  green: { name: '翡翠绿', color: '#10b981' },
  blue: { name: '宝石蓝', color: '#3b82f6' },
  orange: { name: '暖阳橙', color: '#f97316' },
  red: { name: '中国红', color: '#dc2626' },
  navy: { name: '深海蓝', color: '#1e3a8a' },
  gray: { name: '石墨灰', color: '#6b7280' },
  sky: { name: '天空蓝', color: '#0ea5e9' },
}

export function generateTemplateTheme(
  template: string,
  tone: string
): ThemeConfig {
  const templateInfo = styleTemplates[template as keyof typeof styleTemplates]
  const toneInfo = colorTones[tone as keyof typeof colorTones]

  return {
    id: `${template}-${tone}`,
    name: `${templateInfo.name}${toneInfo.name}`,
    type: 'template',
    description: `${templateInfo.description}，${toneInfo.name}配色`,
    layout: 'default',
    colors: {
      primary: toneInfo.color,
      secondary: adjustColor(toneInfo.color, -20),
      text: '#333333',
      background: '#ffffff',
      border: '#e5e5e5',
      code: '#f6f8fa',
      quote: '#f7f7f7',
      link: toneInfo.color,
    },
    fonts: {
      title: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
  }
}

function adjustColor(color: string, amount: number): string {
  const hex = color.replace('#', '')
  const num = parseInt(hex, 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount))
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export function getAllThemes(): ThemeConfig[] {
  const themes = Object.values(builtInThemes).map((theme) => ({
    ...theme,
    layout: 'default',
  }))

  Object.keys(styleTemplates).forEach((template) => {
    Object.keys(colorTones).forEach((tone) => {
      themes.push(generateTemplateTheme(template, tone))
    })
  })

  return themes
}
