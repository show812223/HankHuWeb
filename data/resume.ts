import type { ResumeData } from '~/types/resume'

export const resumeData: ResumeData = {
  summary: '專注於 Vue 3 / Nuxt 4 的前端技術主管，擁有 6 年以上企業級 Web 應用開發經驗。目前帶領 2 人前端團隊，負責架構設計、ESLint 團隊規則制定、E2E 測試導入與 CI/CD 流程建置，致力於打造高效、可維護的現代化前端解決方案。',

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
    },
    {
      name: '企業級前端框架',
      description: '為公司建立的前端開發框架，包含組件庫、工具函數與最佳實踐指南。',
      technologies: ['Vue 3', 'TypeScript', 'Vite', 'Vitest'],
    },
    {
      name: 'Azure DevOps CI/CD Pipeline',
      description: '設計與實作自動化部署流程，支援多環境部署與自動化測試。',
      technologies: ['Azure DevOps', 'Docker', 'YAML', 'Shell Script'],
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
        '制定 ESLint 團隊開發規範，統一程式碼風格與最佳實踐',
        '導入 Playwright E2E 測試框架，提升產品品質與交付穩定性',
        '跨部門協作，與產品、後端團隊緊密配合確保專案順利交付',
      ],
      technologies: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Vuetify', 'ESLint', 'Playwright', 'Azure DevOps'],
    },
    {
      company: '衛武資訊股份有限公司',
      position: '前端技術組長',
      department: 'WeBIM Services',
      location: '台灣 臺北市',
      startDate: '2024/03',
      endDate: '2024/09',
      description: [
        '帶領前端開發團隊，進行 Code Review 與技術指導',
        '主導前端架構設計與重構，優化系統效能與可維護性',
        '建立與優化 CI/CD 流程，使用 Azure DevOps 實現自動化部署',
        '負責新人培訓與技術分享，提升團隊技術能力',
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
        '負責企業級 Web 應用程式開發與維護',
        '使用 Vue 2/3 與 Nuxt 建構響應式前端介面',
        '與後端團隊協作，串接 RESTful API 實現業務功能',
        '參與系統效能優化與使用者體驗改善',
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
}
