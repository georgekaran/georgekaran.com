import { Language } from '@/domain/models/language'

export const setCurrentLanguageAdapter = (language: Language): void => {
  localStorage.setItem('__georgekaran_language', language)
}

export const getCurrentLanguageAdapter = (): Language => {
  try {
    return <Language>JSON.parse(localStorage.getItem('__georgekaran_language')!)
  } catch (e) {
    return 'pt_BR'
  }
}
