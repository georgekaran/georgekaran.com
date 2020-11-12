import { useRouter } from 'next/router'

import { i18n } from '@/data/protocols'
import { I18N } from '@/infra/i18n/i18n'
import messages from '@/main/config/messages'
import { Language } from '@/domain/models/language'

export const makei18n = (): i18n => {
  const router = useRouter()
  const locale = router.locale as Language
  return new I18N(locale, messages)
}
