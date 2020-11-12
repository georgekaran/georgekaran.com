import { Language } from '@/domain/models/language'

export const setCurrentLanguageAdapter = (language: Language): void => {
  localStorage.setItem('__georgekaran_language', language)
}

export const getCurrentLanguageAdapter = (): Language => {
  if (typeof window === 'undefined') {
    return Language.pt
  }
  const language: Language = (localStorage.getItem('__georgekaran_language') as Language)
  if (language in Language) {
    return language
  }
  return Language.pt
}
