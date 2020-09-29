import React from 'react'
import { screen } from '@testing-library/react'

import { Planet } from '.'
import { renderWithTheme } from '@/test/helpers'

describe('<Planet />', () => {
  it('should render with medium size', () => {
    renderWithTheme(<Planet />)
    expect(screen.getByTestId('planet')).toHaveStyle({
      width: '32rem',
      height: '32rem'
    })
  })
})
