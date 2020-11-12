import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render as renderTesting, RenderResult } from '@testing-library/react'

import theme from '@/presentation/styles/theme'
import I18NProvider from '@/main/factories/context/I18NProvider'
import messages from '@/main/config/messages'
import { NextRouterStub, RouterContextMock } from './RouterContextMock'

export const render = (children: React.ReactNode, nextRouter = new NextRouterStub()): RenderResult => {
  return renderTesting(
    <RouterContextMock nextRouter={nextRouter}>
      <I18NProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </I18NProvider>
    </RouterContextMock>
  )
}

export const msg = messages.pt
