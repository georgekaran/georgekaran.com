import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Technology, TechnologyProps } from '.'
import { renderWithTheme } from '@/test/helpers'

type SutProps = Partial<TechnologyProps>

const makeSut = ({
  image = 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png',
  alt = 'React logo (Atom)'
}: SutProps = {}): RenderResult => {
  return renderWithTheme(<Technology image={image} alt={alt} />)
}

describe('<Technology />', () => {
  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'React logo (Atom)')
  })

  it('should render with small size if prop is provided', () => {
    makeSut({ size: 'small' })
    expect(screen.getByRole('img')).toHaveStyle({
      width: '4rem',
      height: '4rem'
    })
  })
})
