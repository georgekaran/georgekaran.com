import { Language } from '@/domain/models/language'

export const setCurrentLanguageAdapter = (language: Language): void => {
  localStorage.setItem('__georgekaran_language', language)
}
