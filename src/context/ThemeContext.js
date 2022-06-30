import React, { useState } from 'react'

export const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  // Get system local theme
  const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    :  'light'

  // Verify if user has set a theme in LocalStorage
  const localTheme = localStorage.getItem('theme') || sysTheme

  const [theme, setTheme] = useState(localTheme)
  return <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
}