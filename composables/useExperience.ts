import { resumeData } from '~/data/resume'

/**
 * Experience calculation composable
 * 依據 resumeData.careerStartDate 動態計算年資，跨年自動更新，
 * 不需要每年手動調整履歷上的「X 年經驗」。
 */
export const useExperience = () => {
  /**
   * 已累積的完整年資（無條件捨去）
   * 例如 2018-03 → 2026-06 = 8.25 年 → 8
   */
  const yearsOfExperience = computed<number>(() => {
    const start = new Date(`${resumeData.careerStartDate}-01T00:00:00`)
    const now = new Date()

    let years = now.getFullYear() - start.getFullYear()
    // 若今年的「週年月份」還沒到，年資要再減一年
    if (now.getMonth() < start.getMonth()) {
      years -= 1
    }

    return Math.max(years, 0)
  })

  return {
    yearsOfExperience,
  }
}
