export type BuiltInTheme = 'default' | 'bytedance' | 'apple' | 'sports' | 'chinese' | 'cyber'

export type StyleTemplate = 'minimal' | 'focus' | 'elegant' | 'bold'

export type ColorTone = 'gold' | 'green' | 'blue' | 'orange' | 'red' | 'navy' | 'gray' | 'sky'

export type FontSize = 'small' | 'medium' | 'large'

export type BackgroundType = 'default' | 'grid' | 'none'

export interface ThemeConfig {
  id: string
  name: string
  type: 'built-in' | 'template'
  description: string
  layout: string
  colors: {
    primary: string
    secondary: string
    text: string
    background: string
    border: string
    code: string
    quote: string
    link: string
  }
  fonts: {
    title: string
    body: string
    code: string
  }
}

export interface EditorState {
  markdown: string
  theme: string
  fontSize: FontSize
  backgroundType: BackgroundType
  layout: LayoutType
}

export type LayoutType = 'default' | 'elegant' | 'modern' | 'classic' | 'minimal' | 'magazine' | 'news' | 'card'
