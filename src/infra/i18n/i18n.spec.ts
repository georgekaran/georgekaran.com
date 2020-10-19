import { I18N } from './i18n'
import { Language } from '@/domain/models/language'
import { mockLanguage } from '@/test/mockLanguage'

const messagesMock = {
  pt_BR: {
    any_msg: 'any_value_pt_BR',
    any_msg_mask: 'any_$1_pt_BR'
  },
  en_US: {
    any_msg: 'any_value_en_US',
    any_msg_mask: 'any_$1_en_US'
  },
  es_ES: {
    any_msg: 'any_value_en_US',
    any_msg_mask: 'any_$1_en_US'
  }
}

type SutTypes = {
  sut: I18N
  language: Language
}

const makeSut = (): SutTypes => {
  const language = mockLanguage()
  const sut = new I18N(language, messagesMock)

  return {
    sut,
    language
  }
}

describe('i18n', () => {
  test('should return the correct message', () => {
    const { sut, language } = makeSut()
    expect(sut.language).toEqual(language)
    expect(messagesMock[language].any_msg).toEqual(sut.t('any_msg'))
  })
})
