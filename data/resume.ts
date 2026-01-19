import type { ResumeData } from '~/types/resume'

export const resumeData: ResumeData = {
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
      department: '研發部',
      startDate: '2018/03',
      endDate: '至今',
      description: [
        '負責前端應用程式開發與維護，使用 Vue 3 / Nuxt 3 建構企業級 Web 應用',
        '主導前端架構設計與技術選型，確保系統的可擴展性與維護性',
        '帶領團隊進行技術指導，包含 Code Review、技術分享與新人培訓',
        '建立與優化 CI/CD 流程，使用 Azure DevOps 實現自動化部署',
      ],
      technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Azure DevOps', 'Docker'],
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
