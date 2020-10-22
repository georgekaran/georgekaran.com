import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render as renderTesting, RenderResult } from '@testing-library/react'

import theme from '@/presentation/styles/theme'
import LanguageProvider from '@/main/factories/context/LanguageProvider'
import I18NProvider from '@/main/factories/context/I18NProvider'
import messages from '@/main/config/messages'
import { getCurrentLanguageAdapter, setCurrentLanguageAdapter } from '@/main/adapters/current-language'

export const render = (children: React.ReactNode): RenderResult => {
  return renderTesting(
    <LanguageProvider
      setCurrentLanguage={setCurrentLanguageAdapter}
      getCurrentLanguage={getCurrentLanguageAdapter}
    >
      <I18NProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </I18NProvider>
    </LanguageProvider>
  )
}

export const msg = messages.pt_BR
