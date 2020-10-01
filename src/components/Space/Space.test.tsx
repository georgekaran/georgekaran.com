import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Space } from '.'
import { renderWithTheme } from '@/test/helpers'

const makeSut = (): RenderResult => {
  return renderWithTheme(<Space />)
}

describe('<Space />', () => {
  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByTestId('fog-1')).toBeInTheDocument()
    expect(screen.getByTestId('fog-2')).toBeInTheDocument()
  })
})
