
import React from 'react'

import LanguageContext from '@/presentation/contexts/language'
import { getCurrentLanguageAdapter, setCurrentLanguageAdapter } from '@/main/adapters/current-language'

type LanguageHOCProps = {
  children: React.ReactNode
}

const LanguageProvider = ({ children }: LanguageHOCProps) => {
  return (
    <LanguageContext.Provider value={{
      getCurrentLanguage: getCurrentLanguageAdapter,
      setCurrentLanguage: setCurrentLanguageAdapter
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
