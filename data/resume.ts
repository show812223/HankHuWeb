import type { ResumeData } from '~/types/resume'

export const resumeData: ResumeData = {
  summary:
    '擁有 6 年經驗的前端技術主管，擅長帶領團隊進行大型專案轉型與技術升級。主導多項產品從舊有架構遷移至 Vue 3 / Nuxt 4 與 Monorepo 體系，並成功導入 AI Code Review 與 AI 驅動的開發工作流（Claude Skills / Playwright），大幅優化研發品質與交付速度。專精於前端工程化，從介面開發、自動化測試到佈署流程，建構完整的技術閉環。',

  languages: [
    { name: '中文', level: '母語', icon: 'mdi-ideogram-cjk' },
    { name: 'English', level: '中等', icon: 'mdi-alphabetical' },
  ],

  projects: [
    {
      name: '生命靈數計算器',
      description: '基於生命靈數理論的命理計算工具，提供個人生命數字分析與解讀。',
      technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vercel'],
      url: 'https://life-path-grid.vercel.app/',
      github: 'https://github.com/show812223/life-path-grid',
    },
    {
      name: '個人履歷網站',
      description: '使用 Nuxt 3 + Vuetify 打造的現代化個人履歷網站，部署於 Cloudflare Workers。',
      technologies: ['Nuxt 3', 'Vue 3', 'Vuetify', 'TypeScript', 'Cloudflare'],
      github: 'https://github.com/show812223/HankHuWeb',
    },
  ],

  skills: [
    {
      category: '前端框架',
      icon: 'mdi-vuejs',
      items: [
        { name: 'Vue 3', level: 5 },
        { name: 'Nuxt 3', level: 5 },
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
        '負責前端團隊管理與技術決策，主導多項企業級專案的前端架構規劃',
        '建立前端開發規範與最佳實踐，提升團隊整體開發效率與代碼品質',
        '進行技術評估與選型，導入新技術以提升產品競爭力',
        '跨部門協作，與產品、後端團隊緊密配合確保專案順利交付',
      ],
      technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vuetify', 'Azure DevOps'],
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
      technologies: [
        'Vue 3',
        'Nuxt 3',
        'TypeScript',
        'Vuetify',
        'Azure DevOps',
        'Docker',
        'Git',
        'REST API',
        'Vite',
        'Pinia',
        'SCSS',
        'Jest',
        'Cypress',
        'Figma',
      ],
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
      technologies: [
        'Vue 3',
        'Vue 2',
        'TypeScript',
        'JavaScript',
        'Vuetify',
        'HTML5',
        'CSS3',
        'SCSS',
      ],
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
      url: 'https://learn.microsoft.com/api/credentials/share/zh-tw/31709189/47ACF93E772F9797?sharingId=458C563EE9B36A54',
    },
    {
      name: 'Azure Data Fundamentals',
      code: 'DP-900',
      issuer: 'Microsoft',
      date: '',
      url: 'https://learn.microsoft.com/api/credentials/share/zh-tw/31709189/726CBD3C69AF5963?sharingId=458C563EE9B36A54',
    },
  ],
}
