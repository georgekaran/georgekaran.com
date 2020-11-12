import { I18N } from './i18n'
import { Language } from '@/domain/models/language'
import { mockLanguage } from '@/test/mockLanguage'

const messagesMock = {
  pt: {
    any_msg: 'any_value_pt_BR',
    any_msg_mask: 'any_$0_pt_BR',
    any_msg2_mask: 'any_$0_$1_pt_BR'
  },
  en: {
    any_msg: 'any_value_en_US',
    any_msg_mask: 'any_$0_en_US',
    any_msg2_mask: 'any_$0_$1_en_US'
  },
  es: {
    any_msg: 'any_value_es_ES',
    any_msg_mask: 'any_$0_es_ES',
    any_msg2_mask: 'any_$0_$1_es_ES'
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

  test('should replace message with mask correctly', () => {
    const { sut, language } = makeSut()
    const result1 = sut.t('any_msg_mask', ['any_value'])
    const result2 = sut.t('any_msg2_mask', ['any_value', 'other_value'])

    expect(result1).not.toContain('$0')
    expect(result2).not.toContain('$0')
    expect(result2).not.toContain('$1')

    expect(result1).toBe(messagesMock[language].any_msg_mask.replace('$0', 'any_value'))
    expect(result2).toBe(messagesMock[language].any_msg2_mask.replace('$0', 'any_value').replace('$1', 'other_value'))
  })

  test('should return the original msg if no mask is found', () => {
    const { sut, language } = makeSut()
    const result = sut.t('any_msg', ['any_value'])

    expect(result).toBe(messagesMock[language].any_msg)
  })
})
