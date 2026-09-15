import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const ThemeContext = createContext(null)

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('goldroad-theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return getSystemTheme()
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    root.dataset.theme = theme
    root.classList.add('theme-changing')

    const timer = window.setTimeout(() => {
      root.classList.remove('theme-changing')
    }, 650)

    window.localStorage.setItem('goldroad-theme', theme)

    return () => {
      window.clearTimeout(timer)
      root.classList.remove('theme-changing')
    }
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function handleSystemThemeChange(event) {
      const savedTheme = window.localStorage.getItem('goldroad-theme')

      if (savedTheme !== 'dark' && savedTheme !== 'light') {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark',
      isLight: theme === 'light',
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}
