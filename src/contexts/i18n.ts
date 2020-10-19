import { createContext } from 'react'

import { Language } from '@/domain/models/language'

type i18nProps = {
  setCurrentLanguage?: (language: Language) => void
  getCurrentLanguage?: () => Language
}

export default createContext<i18nProps>({})
