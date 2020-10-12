import React from 'react'
import './utils/mockNextRouter';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

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
