import React from 'react'
import { RenderResult, screen, cleanup } from '@testing-library/react'

import { Planet, PlanetProps } from '.'
import { Technology } from '@/presentation/components/Technology'
import { render } from '@/test/utils/helpers'

const componentFactory = (length: number): React.ReactNode[] => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(<Technology key={`react-${i}`} image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt={`React logo ${i}`} />)
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
      top: '20%'
    })
  }
}

type SutProps = Partial<PlanetProps>

const makeSut = ({ orbitElements }: SutProps = {}): RenderResult => {
  return render(<Planet orbitElements={orbitElements} />)
}

describe('<Planet />', () => {
  it('should render with medium size', () => {
    makeSut()
    const planetWrapper = screen.getByTestId('planet')
    expect(planetWrapper).toHaveStyle({
      width: '50%'
    })
    expect(screen.queryAllByTestId('orbit-element')).toHaveLength(0)
  })

  it('should render orbitElements if there provided', () => {
    makeSut({ orbitElements: componentFactory(5) })
    testOrbitElements()
    cleanup()
  })
})
