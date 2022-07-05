import React, { useState } from 'react'

export const SectionContext = React.createContext({})

export const SectionProvider = ({ children }) => {

  const [section, setSection] = useState('home')
  return <SectionContext.Provider value={{ section, setSection }}>
    {children}
  </SectionContext.Provider>
}