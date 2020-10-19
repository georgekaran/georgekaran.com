import { Language } from '@/domain/models/language'

export const setCurrentLanguageAdapter = (language: Language): void => {
  localStorage.setItem('__georgekaran_language', language)
}

export const getCurrentLanguageAdapter = (): Language => {
  return localStorage.getItem('__georgekaran_language') as Language || 'pt_BR'
}
