'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const localTheme = localStorage.getItem('theme')

    setTheme(localTheme || (prefersDark ? 'dark' : 'light'))
    setMounted(true)
  }, [setTheme])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme || 'light')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="transition duration-500 ease-in-out">
      <input
        type="checkbox"
        id="darkmode"
        name="darkmode"
        className={`form-switch h-6 w-10 rounded-full transition-all duration-150 ease-out focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          theme === 'dark'
            ? 'bg-gray-800 ring-offset-gray-800'
            : 'bg-indigo-200 ring-offset-indigo-600'
        } checked:bg-current`}
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        htmlFor="darkmode"
        className={`${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        } ml-3 text-sm font-medium`}
      >
        Darkmode
      </label>
    </div>
  )
}
