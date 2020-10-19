import React from 'react'
import './utils/mockNextRouter';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/presentation/styles/global'
import theme from '../src/presentation/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
