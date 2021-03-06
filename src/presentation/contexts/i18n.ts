import { createContext } from 'react'

import { i18n } from '@/data/protocols/i18n'

type i18nProps = {
  i18n?: i18n
}

export default createContext<i18nProps>({})
