import { mockLanguage } from '@/test/mockLanguage'
import { I18N } from './i18n'

describe('i18n', () => {
  test('should return the correct message', () => {
    const language = mockLanguage()
    const i18nStubInstance = new I18N(language)
    expect(i18nStubInstance.language).toEqual(language)
    expect(i18nStubInstance.message!.copy_url).toEqual(i18nStubInstance.t('copy_url'))
  })
})
