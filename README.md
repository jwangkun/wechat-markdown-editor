# 微信公众号 Markdown 编辑器

一个简洁、高效、美观的微信公众号文章排版工具，支持实时预览和一键复制到公众号后台。

## ✨ 功能特性

- **实时预览** - 左侧编辑 Markdown，右侧即时查看排版效果
- **一键复制** - 轻松复制富文本格式，直接粘贴到公众号后台
- **精美主题** - 内置 38 种精心调校的主题，确保最佳阅读体验
- **多种布局** - 支持 12 种布局风格，满足不同场景需求
- **代码高亮** - 支持多种编程语言的语法高亮
- **Markdown 兼容** - 全面支持标准及扩展 Markdown 语法
- **自定义样式** - 支持字体大小、背景类型等自定义设置

## 🎨 主题预览

### 内置主题（6种）
- 默认主题 - 微信经典风格，温暖舒适
- 字节跳动 - 科技现代风格，简洁利落
- 苹果风格 - 视觉渐变风格，精致优雅
- 活力运动 - 活力动感风格，充满能量
- 中国风 - 古典雅致风格，书卷气息
- 赛博朋克 - 未来科技风格，霓虹光影

### 模板主题（32种）
4 种样式模板 × 8 种配色方案 = 32 种组合

**样式模板：**
- 简约 - 纯色文字，无装饰
- 聚焦 - 居中对称，双横线
- 精致 - 左边框递减，渐变
- 醒目 - 满底色标题，投影

**配色方案：**
古铜金、翡翠绿、宝石蓝、暖阳橙、中国红、深海蓝、石墨灰、天空蓝

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 📖 使用说明

1. 在左侧编辑器中输入 Markdown 内容
2. 右侧实时预览排版效果
3. 点击"选择主题"按钮选择喜欢的主题
4. 调整字体大小、布局和背景类型
5. 点击"复制"按钮，将内容复制到剪贴板
6. 在微信公众号后台粘贴即可

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **Markdown 解析**: marked
- **代码高亮**: highlight.js
- **HTML 清理**: DOMPurify

## 📁 项目结构

```
wechat-markdown-editor/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React 组件
│   ├── config/           # 主题配置
│   ├── types/            # TypeScript 类型定义
│   └── utils/            # 工具函数
├── public/               # 静态资源
└── package.json
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

**沉浸创作，美由心生** ✨
