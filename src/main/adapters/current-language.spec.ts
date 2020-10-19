import { mockLanguage } from '@/test/mockLanguage'
import { setCurrentLanguageAdapter, getCurrentLanguageAdapter } from './current-language'

describe('CurrentLanguageAdapter', () => {
  test('Should call localStorage.setItem with correct value', () => {
    const language = mockLanguage()
    setCurrentLanguageAdapter(language)
    expect(localStorage.setItem).toHaveBeenCalledWith('__georgekaran_language', language)
  })

  test('Should call localStorage.getItem with correct value', () => {
    const language = mockLanguage()
    const localStorageGetItemSpy = jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(language)
    const result = getCurrentLanguageAdapter()
    expect(localStorageGetItemSpy).toHaveBeenCalledWith('__georgekaran_language')
    expect(result).toEqual(language)
  })

  test('Should return pt_BR if localStorage.getItem returns a non valid Language', () => {
    jest.spyOn(localStorage, 'getItem').mockReturnValueOnce('not_valid_result')
    const result = getCurrentLanguageAdapter()
    expect(result).toEqual('pt_BR')
  })
})
