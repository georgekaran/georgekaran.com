import { createContext, Dispatch, SetStateAction } from 'react'

import { Language } from '@/domain/models/language'

type LanguageProps = {
  language?: Language
  setLanguage?: Dispatch<SetStateAction<Language>>
}

export default createContext<LanguageProps>({})
