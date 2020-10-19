import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Heading, HeadingProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/presentation/styles/theme'

type SutProps = Partial<HeadingProps>

const makeSut = ({ size, children = 'Heading' }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Heading size={size}>{children}</Heading>)
}

describe('<Heading />', () => {
  it('should render with initial state', () => {
    makeSut()
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontWeight: theme.font.bold,
      fontSize: theme.font.sizes.xlarge
    })
    expect(heading).toHaveStyleRule(
      'font-size',
      theme.font.sizes.large,
      {
        media: '(max-width: 768px)'
      }
    )
  })

  it('should render large size', () => {
    makeSut({ size: 'large' })
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      fontSize: theme.font.sizes.large
    })
    expect(heading).toHaveStyleRule(
      'font-size',
      theme.font.sizes.medium,
      {
        media: '(max-width: 768px)'
      }
    )
  })

  it('should render xlarge size', () => {
    makeSut({ size: 'xlarge' })
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveStyle({
      fontSize: theme.font.sizes.xlarge
    })
    expect(heading).toHaveStyleRule(
      'font-size',
      theme.font.sizes.large,
      {
        media: '(max-width: 768px)'
      }
    )
  })

  it('should render children', () => {
    makeSut({ children: 'any_children' })
    expect(screen.getByText('any_children')).toBeInTheDocument()
  })
})
