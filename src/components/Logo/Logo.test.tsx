import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'

import Logo from './Logo'

const makeSut = (): RenderResult => {
  return render(<Logo />)
}

describe('<Logo />', () => {
  it('should render', () => {
    makeSut()
    expect(screen.getByLabelText(/george mueller/i)).toBeInTheDocument()
  })
})
