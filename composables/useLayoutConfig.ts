/**
 * Layout configuration composable
 * Provides consistent container widths and spacing values across the application
 */
export const useLayoutConfig = () => {
  const container = {
    maxWidth: '1152px',
    style: { maxWidth: '1152px' },
  }

  const spacing = {
    // Section-level vertical padding
    sectionTitle: 'py-16',        // 64px - Page title sections
    sectionContent: 'py-12',      // 48px - Main content sections

    // Component-level gaps
    componentGap: 'ga-8',         // 32px - Between major components
    itemGap: 'ga-4',              // 16px - Between list items

    // Padding values
    containerPadding: 'px-6',     // 24px - Horizontal container padding
  }

  return {
    container,
    spacing,
  }
}
