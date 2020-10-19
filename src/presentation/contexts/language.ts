import { createContext } from 'react'

import { Language } from '@/domain/models/language'

type LanguageProps = {
  setCurrentLanguage?: (language: Language) => void
  getCurrentLanguage?: () => Language
}

export default createContext<LanguageProps>({})
