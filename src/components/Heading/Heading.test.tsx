import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Heading, HeadingProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Partial<Omit<HeadingProps, 'children'>>

const makeSut = ({ size = 'large' }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Heading size={size}>Heading</Heading>)
}

describe('<Heading />', () => {
  it('should render with initial state', () => {
    makeSut()
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontWeight: theme.font.bold
    })
  })
})
