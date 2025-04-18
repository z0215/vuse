type PresetTheme = 'black' | 'blue' | 'orange' | 'yellow' | 'green' | 'pink' | 'purple'

export const useThemePreset = () => {
  const STORAGE_KEY = 'theme-preset'
  const DEFAULT_VALUE = 'blue'
  let cleanupStorageListener: (() => void) | null = null

  const updateBodyClass = (value: PresetTheme) => {
    document.body.classList.forEach((value) => {
      if (!value.startsWith('theme-')) {
        return
      }
      document.body.classList.remove(value)
    })
    document.body.classList.add(`theme-${value}`)
  }

  const preset = customRef<PresetTheme>((track, trigger) => {
    let value = (localStorage.getItem(STORAGE_KEY) as PresetTheme | null) ?? DEFAULT_VALUE

    updateBodyClass(value)

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) {
        return
      }
      value = (e.newValue as PresetTheme) ?? DEFAULT_VALUE
      updateBodyClass(value)
      trigger()
    }
    window.addEventListener('storage', handleStorageChange)
    cleanupStorageListener = () => {
      window.removeEventListener('storage', handleStorageChange)
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
  })

  return preset
}
