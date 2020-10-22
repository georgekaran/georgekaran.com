
import React, { useState, useEffect } from 'react'

import LanguageContext from '@/presentation/contexts/language'
import { Language } from '@/domain/models/language'

type LanguageHOCProps = {
  children: React.ReactNode,
  getCurrentLanguage: () => Language,
  setCurrentLanguage: (language: Language) => void,
}

const LanguageProvider = ({ children, getCurrentLanguage, setCurrentLanguage }: LanguageHOCProps) => {
  const [language, setLanguage] = useState(getCurrentLanguage())

  useEffect(() => {
    setCurrentLanguage(language)
  }, [language, setCurrentLanguage])

  return (
    <LanguageContext.Provider value={{
      setLanguage,
      language
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
