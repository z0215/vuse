interface ThemeColors {
  textColor: string
  backgroundColor: string
  primaryColor: string
  primaryTextColor: string
}

export const useThemeColors = () => {
  const STORAGE_KEY = 'theme-colors'
  const DEFAULT_VALUE = {
    textColor: '#0c0a09',
    backgroundColor: '#fff',
    primaryColor: '#2563eb',
    primaryTextColor: '#fff',
  }
  const getColors = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : DEFAULT_VALUE
    }
    catch {
      return DEFAULT_VALUE
    }
  }
  const updateCssVariable = (colors: ThemeColors) => {
    Object.entries(colors).forEach(([key, value]) => {
      document.body.style.setProperty(`--${key.split(/(?=[A-Z])/).join('-').toLowerCase()}`, value)
    })
  }

  const colors = reactive<ThemeColors>(getColors())

  updateCssVariable(colors)

  watch(
    () => colors,
    (value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      updateCssVariable(value)
    },
    { deep: true },
  )

  const handleStorageChange = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) {
      return
    }
    const colors = e.newValue ? JSON.parse(e.newValue) : DEFAULT_VALUE
    updateCssVariable(colors)
  }
  window.addEventListener('storage', handleStorageChange)

  onUnmounted(() => {
    window.removeEventListener('storage', handleStorageChange)
  })

  return colors
}
