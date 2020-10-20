
import React from 'react'

import i18nContext from '@/presentation/contexts/i18n'
import { makei18n } from '@/main/factories/i18n/i18n-factory'

type i18nProviderProps = {
  children: React.ReactNode
}

const i18nProvider = ({ children }: i18nProviderProps) => {
  return (
    <i18nContext.Provider value={{
      i18n: makei18n()
    }}>
      {children}
    </i18nContext.Provider>
  )
}

export default i18nProvider
