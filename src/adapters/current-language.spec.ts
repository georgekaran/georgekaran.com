import { mockLanguage } from '@/test/mockLanguage'
import { setCurrentLanguageAdapter } from './current-language'

describe('CurrentLanguageAdapter', () => {
  test('Should call localStorage.setItem with correct value', () => {
    const language = mockLanguage()
    setCurrentLanguageAdapter(language)
    expect(localStorage.setItem).toHaveBeenCalledWith('__georgekaran_language', language)
  })
})
