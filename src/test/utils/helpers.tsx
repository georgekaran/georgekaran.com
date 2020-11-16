import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render as renderTesting, RenderResult } from '@testing-library/react'

import theme from '@/presentation/styles/theme'
import I18NProvider from '@/main/factories/context/I18NProvider'
import messages from '@/main/config/messages'
import { NextRouterStub, RouterContextStub } from '@/test/utils/RouterContextStub'

export const render = (children: React.ReactNode, nextRouter = new NextRouterStub()): RenderResult => {
  return renderTesting(
    <RouterContextStub nextRouter={nextRouter}>
      <I18NProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </I18NProvider>
    </RouterContextStub>
  )
}

export const msg = messages.pt
