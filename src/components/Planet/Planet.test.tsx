import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Planet, PlanetProps } from '.'
import { renderWithTheme } from '@/test/helpers'

const makeSut = ({ size }: PlanetProps = {}): RenderResult => {
  return renderWithTheme(<Planet size={size} />)
}

describe('<Planet />', () => {
  it('should render with medium size', () => {
    makeSut()
    expect(screen.getByTestId('planet')).toHaveStyle({
      width: '32rem',
      height: '32rem'
    })
  })
})
