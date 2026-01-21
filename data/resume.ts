import type { ResumeData } from '~/types/resume'

export const resumeData: ResumeData = {
  summary: '專注於 Vue 3 / Nuxt 4 的前端技術主管，擁有 6 年以上企業級 Web 應用開發經驗。目前帶領 2 人前端團隊，負責架構設計、ESLint 團隊規則制定、E2E 測試導入與 CI/CD 流程建置。積極導入 AI 輔助開發工具，提升測試與 E2E 覆蓋率，致力於打造高效、可維護的現代化前端解決方案。',

  contactInfo: {
    linkedin: 'https://www.linkedin.com/in/hank-hu',
    github: 'https://github.com/show812223',
  },

  highlights: [
    {
      icon: 'mdi-chart-line',
      title: 'E2E 覆蓋率提升',
      description: '導入 Playwright + AI 輔助，測試覆蓋率從 15% 提升至 70%',
    },
    {
      icon: 'mdi-account-group',
      title: '團隊領導',
      description: '帶領 2 人前端團隊，建立開發規範與 Code Review 流程',
    },
    {
      icon: 'mdi-rocket-launch',
      title: 'CI/CD 自動化',
      description: '建置 Azure DevOps Pipeline，部署時間縮短 60%',
    },
    {
      icon: 'mdi-office-building',
      title: 'BIM 產業經驗',
      description: '6 年以上 AEC 產業數位化與 BIM 平台開發經驗',
    },
  ],

  languages: [
    { name: '中文', level: '母語', icon: 'mdi-ideogram-cjk' },
    { name: 'English', level: '中等', icon: 'mdi-alphabetical' },
  ],

  projects: [
    {
      name: '個人履歷網站',
      description: '使用 Nuxt 4 + Vuetify 打造的現代化個人履歷網站，部署於 Vercel。',
      technologies: ['Nuxt 4', 'Vue 3', 'Vuetify', 'TypeScript', 'Vercel'],
      github: 'https://github.com/show812223/HankHuWeb',
      highlights: [
        'Lighthouse 效能分數達 95+',
        '響應式設計支援多裝置瀏覽',
        '日系極簡風格 UI/UX 設計',
      ],
    },
    {
      name: '企業級前端框架',
      description: '為公司建立的前端開發框架，包含組件庫、工具函數與最佳實踐指南。',
      technologies: ['Vue 3', 'TypeScript', 'Vite', 'Vitest'],
      highlights: [
        '統一 3 個專案的開發標準',
        '減少 40% 重複程式碼',
        '內建 20+ 可複用元件',
      ],
    },
    {
      name: 'Azure DevOps CI/CD Pipeline',
      description: '設計與實作自動化部署流程，支援多環境部署與自動化測試。',
      technologies: ['Azure DevOps', 'Docker', 'YAML', 'Shell Script'],
      highlights: [
        '部署時間從 30 分鐘縮短至 12 分鐘',
        '支援 Dev/Staging/Production 三環境',
        '整合自動化測試與品質檢查',
      ],
    },
  ],

  skills: [
    {
      category: '前端框架',
      icon: 'mdi-vuejs',
      items: [
        { name: 'Vue 3', level: 5 },
        { name: 'Nuxt 4', level: 5 },
        { name: 'Vuetify', level: 4 },
      ],
    },
    {
      category: '程式語言',
      icon: 'mdi-language-typescript',
      items: [
        { name: 'TypeScript', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'HTML5', level: 5 },
        { name: 'CSS3 / SCSS', level: 4 },
      ],
    },
    {
      category: '雲端服務',
      icon: 'mdi-cloud',
      items: [
        { name: 'Azure DevOps', level: 4 },
        { name: 'Azure CI/CD', level: 4 },
        { name: 'Cloudflare', level: 3 },
      ],
    },
    {
      category: 'DevOps 工具',
      icon: 'mdi-docker',
      items: [
        { name: 'Docker', level: 4 },
        { name: 'Git', level: 5 },
        { name: 'CI/CD Pipeline', level: 4 },
      ],
    },
    {
      category: '系統架構',
      icon: 'mdi-sitemap',
      items: [
        { name: '微服務架構', level: 4 },
        { name: '前端架構設計', level: 5 },
        { name: 'RESTful API', level: 4 },
      ],
    },
    {
      category: '測試與程式碼品質',
      icon: 'mdi-test-tube',
      items: [
        { name: 'Playwright', level: 4 },
        { name: 'ESLint', level: 5 },
        { name: 'Vitest', level: 4 },
      ],
    },
    {
      category: 'AI 輔助開發',
      icon: 'mdi-robot',
      items: [
        { name: 'Claude Code', level: 4 },
        { name: 'GitHub Copilot', level: 4 },
        { name: 'AI Test Generation', level: 3 },
      ],
    },
    {
      category: '產業知識',
      icon: 'mdi-office-building',
      items: [
        { name: 'BIM 建築資訊模型', level: 4 },
        { name: 'AEC 產業數位化', level: 4 },
        { name: '營建專案管理', level: 3 },
      ],
    },
    {
      category: '軟實力',
      icon: 'mdi-account-star',
      items: [
        { name: '團隊領導', level: 4 },
        { name: '技術指導與培訓', level: 4 },
        { name: '跨部門溝通', level: 4 },
      ],
    },
  ],

  experiences: [
    {
      company: '衛武資訊股份有限公司',
      position: '前端技術襄理',
      department: 'WeBIM Services',
      location: '台灣 臺北市',
      startDate: '2024/09',
      endDate: '至今',
      description: [
        '帶領 2 人前端團隊，負責技術決策與專案架構規劃',
        '制定 ESLint 團隊開發規範，統一程式碼風格，Code Review 效率提升 30%',
        '導入 Playwright E2E 測試框架，測試覆蓋率從 15% 提升至 70%',
        '導入 AI 輔助開發工具（Claude Code、Copilot），開發效率提升 25%',
        '跨部門協作，與產品、後端團隊緊密配合，專案準時交付率達 95%',
      ],
      technologies: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Vuetify', 'ESLint', 'Playwright', 'AI Tools', 'Azure DevOps'],
    },
    {
      company: '衛武資訊股份有限公司',
      position: '前端技術組長',
      department: 'WeBIM Services',
      location: '台灣 臺北市',
      startDate: '2024/03',
      endDate: '2024/09',
      description: [
        '帶領前端開發團隊，每週進行 Code Review，程式碼品質提升 40%',
        '主導前端架構重構，頁面載入速度優化 50%，Bundle Size 減少 35%',
        '建立 Azure DevOps CI/CD Pipeline，部署時間從 30 分鐘縮短至 12 分鐘',
        '負責新人培訓與技術分享，累計培訓 5 位前端工程師',
      ],
      technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vuetify', 'Azure DevOps', 'Docker', 'Git', 'REST API', 'Vite', 'Pinia', 'SCSS', 'Jest', 'Cypress', 'Figma'],
    },
    {
      company: '衛武資訊股份有限公司',
      position: '前端工程師',
      department: 'WeBIM Services',
      location: '台灣 臺北市',
      startDate: '2018/03',
      endDate: '2024/03',
      description: [
        '負責 BIM 協作平台前端開發，服務超過 500+ 企業用戶',
        '使用 Vue 2/3 與 Nuxt 建構響應式前端介面，支援多語系',
        '與後端團隊協作，串接 50+ RESTful API 實現業務功能',
        '參與系統效能優化，首屏載入時間減少 40%',
      ],
      technologies: ['Vue 3', 'Vue 2', 'TypeScript', 'JavaScript', 'Vuetify', 'HTML5', 'CSS3', 'SCSS'],
    },
  ],

  educations: [
    {
      school: '國立臺灣科技大學',
      degree: '碩士',
      major: '營建工程系 資訊組',
      startDate: '2016',
      endDate: '2018',
    },
    {
      school: '國立臺灣科技大學',
      degree: '學士',
      major: '營建工程系',
      startDate: '2012',
      endDate: '2016',
    },
  ],

  certifications: [
    {
      name: 'Azure AI Engineer Associate',
      code: 'AI-102',
      issuer: 'Microsoft',
      date: '',
      url: 'https://learn.microsoft.com/credentials',
    },
    {
      name: 'Azure Data Fundamentals',
      code: 'DP-900',
      issuer: 'Microsoft',
      date: '',
      url: 'https://learn.microsoft.com/credentials',
    },
  ],

  contributions: [
    {
      type: 'talk',
      title: 'Vue 3 Composition API 實戰分享',
      description: '公司內部技術分享，介紹 Vue 3 Composition API 最佳實踐與遷移策略',
    },
    {
      type: 'talk',
      title: 'ESLint 團隊規範制定',
      description: '分享如何為團隊制定 ESLint 規則，統一程式碼風格',
    },
    {
      type: 'talk',
      title: 'Playwright E2E 測試入門',
      description: '介紹 Playwright 測試框架與 AI 輔助測試生成',
    },
  ],
}
