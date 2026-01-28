# HankHuWeb - 個人履歷網站

一個使用 Nuxt 3 + Naive UI + Tailwind CSS 打造的現代化個人履歷網站，採用日系溫暖極簡風格設計。

## 技術棧

- **框架**: [Nuxt 3](https://nuxt.com/) - Vue 3 全端框架
- **UI 組件庫**: [Naive UI](https://www.naiveui.com/) - Vue 3 組件庫
- **樣式**: [Tailwind CSS](https://tailwindcss.com/) - 工具優先的 CSS 框架
- **字體**: Google Fonts (Noto Serif JP, Zen Maru Gothic)
- **部署**: Cloudflare Workers / Vercel

## 功能特色

- 響應式設計，完美支援桌面與移動設備
- 日系極簡風格，溫暖色調配色
- 流暢的頁面過渡動畫
- SEO 優化
- 高效能載入

## 頁面結構

```
├── 首頁 (/)           - 個人簡介與技術展示
├── 履歷 (/Resume)     - 工作經驗、技能、教育背景
├── 作品集 (/Projects) - Side Projects 展示
└── 聯絡 (/Contact)    - 聯絡資訊與表單
```

## 開發

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置專案

```bash
pnpm build
```

### 預覽建置結果

```bash
pnpm preview
```

## 部署

### NuxtHub (Cloudflare Workers)

```bash
npx nuxthub deploy
```

### Vercel

直接連接 GitHub 倉庫即可自動部署。

## 專案結構

```
HankHuWeb/
├── assets/
│   └── css/              # 全域樣式
├── components/
│   ├── home/             # 首頁組件
│   ├── resume/           # 履歷頁組件
│   └── ui/               # 通用 UI 組件
├── data/
│   └── resume.ts         # 履歷資料
├── layouts/
│   └── default.vue       # 預設佈局
├── pages/                # 頁面路由
├── plugins/              # Nuxt 插件
├── public/               # 靜態資源
└── types/                # TypeScript 類型定義
```

## 自訂資料

編輯 `data/resume.ts` 來更新個人資訊：

- `summary` - 個人簡介
- `projects` - Side Projects
- `skills` - 技術技能
- `experiences` - 工作經驗
- `educations` - 教育背景
- `certifications` - 專業證照
- `languages` - 語言能力

## Side Projects

- [生命靈數計算器](https://life-path-grid.vercel.app/) - 基於生命靈數理論的命理計算工具

## 授權

MIT License

## 作者

**胡聖翰 (Sheng Han Hu)**

- GitHub: [@show812223](https://github.com/show812223)
- LinkedIn: [聖翰 胡](https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/)
