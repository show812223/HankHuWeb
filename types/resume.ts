// 履歷資料類型定義

export interface Skill {
  category: string
  items: SkillItem[]
  icon: string
}

export interface SkillItem {
  name: string
  level?: number // 1-5 熟練度（可選）
}

export interface Experience {
  company: string
  position: string
  department: string
  location?: string
  startDate: string
  endDate: string | '至今'
  description: string[]
  technologies?: string[]
}

export interface Education {
  school: string
  degree: string
  major: string
  startDate: string
  endDate: string
  description?: string
}

export interface Certification {
  name: string
  code: string
  issuer: string
  date: string
  url?: string
  credentialId?: string
}

export interface Language {
  name: string
  level: string // 母語、精通、流利、中等、基礎
  icon?: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  url?: string
  github?: string
  image?: string
}

export interface ResumeData {
  summary: string
  skills: Skill[]
  languages: Language[]
  experiences: Experience[]
  educations: Education[]
  certifications: Certification[]
  projects: Project[]
}
