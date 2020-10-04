import React from 'react'
import { RenderResult, screen, cleanup } from '@testing-library/react'

import { Planet, PlanetProps } from '.'
import { Technology } from '@/components/Technology'
import { renderWithTheme } from '@/test/helpers'

const componentFactory = (length: number): React.ReactNode[] => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(<Technology key={`react-${i}`} image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt={`React logo ${i}`} size="medium" />)
  }
  return arr
}

const testOrbitElements = () => {
  const arr = screen.getAllByTestId('orbit-element')
  expect(arr).toHaveLength(5)
  for (let i = 0; i < 5; i++) {
    expect(arr[i]).toHaveStyle({
      animation: `orbit-${i} 14s infinite linear`,
      position: 'absolute',
      left: '38%',
      top: '7%'
    })

    expect(arr[i]).toHaveStyleRule(
      'animation',
      `orbit-${i}-mobile 14s infinite linear`,
      {
        media: '(max-width: 768px)'
      }
    )
  }
}

type SutProps = Partial<PlanetProps>

const makeSut = ({ size, orbitElements }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Planet size={size} orbitElements={orbitElements} />)
}

describe('<Planet />', () => {
  it('should render with medium size', () => {
    makeSut()
    const planetWrapper = screen.getByTestId('planet')
    expect(planetWrapper).toHaveStyle({
      width: '32rem',
      height: '32rem'
    })
    expect(planetWrapper).toHaveStyleRule('width', '16rem !important', { media: '(max-width: 768px)' })
    expect(planetWrapper).toHaveStyleRule('height', '16rem !important', { media: '(max-width: 768px)' })
    expect(screen.getByTestId('onion')).toHaveStyleRule('width', '30rem !important', { media: '(max-width: 768px)' })
    expect(screen.queryAllByTestId('orbit-element')).toHaveLength(0)
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
    // Small
    makeSut({ size: 'small', orbitElements: componentFactory(5) })
    testOrbitElements()
    cleanup()

    // Medium
    makeSut({ orbitElements: componentFactory(5) })
    testOrbitElements()
    cleanup()

    // Large
    makeSut({ size: 'large', orbitElements: componentFactory(5) })
    testOrbitElements()
  })
})
