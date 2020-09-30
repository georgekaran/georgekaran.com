import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import { transparentize } from 'polished'

import { Technology, TechnologyProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Partial<TechnologyProps>

const makeSut = ({
  image = 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png',
  alt = 'React logo (Atom)',
  ...props
}: SutProps = {}): RenderResult => {
  return renderWithTheme(<Technology image={image} alt={alt} {...props} />)
}

describe('<Technology />', () => {
  it('should render with initial state', () => {
    makeSut()
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png')
    expect(image).toHaveAttribute('alt', 'React logo (Atom)')
    expect(image).toHaveStyle({
      objectFit: 'contain',
      width: '8rem',
      height: '8rem'
    })

    expect(screen.getByTestId('technology-wrapper')).toHaveStyle({
      background: transparentize(0.5, theme.colors.black),
      borderRadius: '50%'
    })
  })

  it('should render with small size if prop is provided', () => {
    makeSut({ size: 'small' })
    expect(screen.getByRole('img')).toHaveStyle({
      width: '4rem',
      height: '4rem'
    })
  })

  it('should render with large size if prop is provided', () => {
    makeSut({ size: 'large' })
    expect(screen.getByRole('img')).toHaveStyle({
      width: '12rem',
      height: '12rem'
    })
  })
})
