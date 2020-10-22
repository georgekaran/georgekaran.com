import { useContext } from 'react'

import LanguageContext from '@/presentation/contexts/language'
import { i18n } from '@/data/protocols'
import { I18N } from '@/infra/i18n/i18n'
import messages from '@/main/config/messages'

export const makei18n = (): i18n => {
  const { language } = useContext(LanguageContext)
  return new I18N(language!, messages)
}
