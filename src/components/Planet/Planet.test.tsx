import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Planet, PlanetProps } from '.'
import { Technology } from '@/components/Technology'
import { renderWithTheme } from '@/test/helpers'

type SutProps = Partial<PlanetProps>

const makeSut = ({ size = 'medium', orbitElements = [] }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Planet size={size} orbitElements={orbitElements} />)
}

describe('<Planet />', () => {
  it('should render with medium size', () => {
    makeSut()
    expect(screen.getByTestId('planet')).toHaveStyle({
      width: '32rem',
      height: '32rem'
    })
  })

  it('should render with small size', () => {
    makeSut({ size: 'small' })
    expect(screen.getByTestId('planet')).toHaveStyle({
      width: '16rem',
      height: '16rem'
    })
  })

  it('should render with large size', () => {
    makeSut({ size: 'large' })
    expect(screen.getByTestId('planet')).toHaveStyle({
      width: '50rem',
      height: '50rem'
    })
  })

  it('should render orbitElements if there provided', () => {
    const orbitElements = [
      <Technology key="react-1" image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt="React logo 1" size="medium" />,
      <Technology key="react-2" image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt="React logo 2" size="medium" />,
      <Technology key="react-3" image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt="React logo 3" size="medium" />
    ]
    makeSut({ orbitElements })
    expect(screen.getAllByTestId('technology-wrapper')).toHaveLength(3)
  })
})
