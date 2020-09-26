import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'

import { Logo, LogoProps } from '.'

type SutProps = Partial<LogoProps>

const makeSut = ({
  hideOnMobile
}: SutProps = {}): RenderResult => {
  return render(<Logo hideOnMobile={hideOnMobile} />)
}

describe('<Logo />', () => {
  test('should render', () => {
    makeSut()
    expect(screen.getByLabelText(/george mueller/i)).toBeInTheDocument()
  })
})
