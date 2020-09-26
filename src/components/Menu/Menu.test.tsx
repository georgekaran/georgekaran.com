import React from 'react'
import { screen } from '@testing-library/react'

import { Menu } from '.'
import { renderWithTheme } from '@/test/helpers'

describe('<Menu />', () => {
  test('should render with initial state', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/George Mueller/i)).toBeInTheDocument()
  })
})
