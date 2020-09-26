import React from 'react'
import { screen } from '@testing-library/react'

import { Heading } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

describe('<Heading />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontWeight: theme.font.bold
    })
  })
})
