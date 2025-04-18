type Theme = 'dark' | 'light' | 'system'

export const useTheme = () => {
  const STORAGE_KEY = 'theme'
  const DEFAULT_VALUE = 'system'
  let cleanupStorageListener: (() => void) | null = null
  let cleanupMediaQueryListener: (() => void) | null = null

  const updateBodyClass = (value: Theme) => {
    document.body.classList.remove('dark')
    if (value !== 'dark') {
      return
    }
    document.body.classList.add('dark')
  }

  const theme = customRef<Theme>((track, trigger) => {
    let value = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? DEFAULT_VALUE

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) {
        return
      }
      value = (e.newValue as Theme) ?? DEFAULT_VALUE
      updateBodyClass(value)
      trigger()
    }
    window.addEventListener('storage', handleStorageChange)

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (value !== 'system') {
        return
      }
      updateBodyClass(e.matches ? 'dark' : 'light')
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (value === 'system') {
      updateBodyClass(mediaQuery.matches ? 'dark' : 'light')
    }
    else {
      updateBodyClass(value)
    }
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    cleanupStorageListener = () => {
      window.removeEventListener('storage', handleStorageChange)
    }
    cleanupMediaQueryListener = () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }

    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        value = newValue
        localStorage.setItem(STORAGE_KEY, newValue)
        updateBodyClass(newValue)
        trigger()
      },
    }
  })

  onUnmounted(() => {
    cleanupStorageListener?.()
    cleanupMediaQueryListener?.()
  })

  return theme
}
