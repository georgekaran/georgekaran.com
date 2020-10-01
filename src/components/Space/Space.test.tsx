import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Space, SpaceProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Partial<SpaceProps>

const makeSut = (props: SutProps = {}): RenderResult => {
  return renderWithTheme(<Space {...props} />)
}

describe('<Space />', () => {
  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByTestId('fog-1')).toBeInTheDocument()
    expect(screen.getByTestId('fog-2')).toBeInTheDocument()
  })

  it('should generate the amount of stars provided', () => {
    makeSut({ stars: 10 })
    const stars = screen.getAllByTestId('star')
    expect(stars).toHaveLength(10)
    expect(stars[0]).toHaveStyle({
      width: '0.4rem',
      height: '0.4rem',
      backgroundColor: theme.colors.white
    })
  })
})
