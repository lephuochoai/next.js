import { CSS_THEME_DARK } from '@/constants/DarkTheme'
import { useEffect } from 'react'

export const useDarkMode = () => {
  useEffect(() => {
    const htmlEl = document?.documentElement

    if (CSS_THEME_DARK && htmlEl) {
      htmlEl.classList.add(CSS_THEME_DARK)
    }

    return () => {
      htmlEl.classList.remove(CSS_THEME_DARK)
    }
  }, [])
}
