import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Menu } from '.'
import { renderWithTheme } from '@/test/helpers'

const makeSut = (): RenderResult => {
  return renderWithTheme(<Menu />)
}

describe('<Menu />', () => {
  test('should render with initial state', () => {
    makeSut()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/George Mueller/i)).toBeInTheDocument()
  })
})
