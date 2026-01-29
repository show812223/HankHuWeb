/**
 * Animation configuration composable
 * Provides consistent animation delay calculations across the application
 */
export const useAnimationConfig = () => {
  // Base delay values (in milliseconds)
  const delays = {
    fast: 100,
    normal: 200,
    slow: 400,
    hero: 600,        // For hero section elements
    secondary: 800,   // For secondary elements
  }

  // Interval between list items (in milliseconds)
  const intervals = {
    fast: 80,         // For dense lists (skills)
    normal: 100,      // For standard lists (contacts, languages)
    slow: 150,        // For cards (projects, experiences)
    character: 200,   // For character-by-character animations
  }

  /**
   * Calculate animation delay for list items
   * @param index - Item index in the list
   * @param baseDelay - Starting delay (default: 200ms)
   * @param interval - Delay between items (default: 150ms)
   * @returns CSS delay string (e.g., "350ms")
   */
  const getListDelay = (
    index: number,
    baseDelay = delays.normal,
    interval = intervals.slow,
  ): string => {
    return `${baseDelay + index * interval}ms`
  }

  /**
   * Calculate animation delay for character animations
   * @param index - Character index
   * @param baseDelay - Starting delay (default: 600ms)
   * @returns CSS delay string
   */
  const getCharacterDelay = (
    index: number,
    baseDelay = delays.hero,
  ): string => {
    return `${baseDelay + index * intervals.character}ms`
  }

  return {
    delays,
    intervals,
    getListDelay,
    getCharacterDelay,
  }
}
