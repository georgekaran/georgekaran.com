import { useContext } from 'react'

import i18nContext from '@/presentation/contexts/i18n'
import { i18n } from '@/data/protocols'

const useI18N = (): i18n => {
  const { i18n } = useContext(i18nContext)

  return i18n!
}

export default useI18N
