import '@/test/mock-match-media'
import React from 'react'

import { Slider, SliderProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import { RenderResult } from '@testing-library/react'

type SutProps = Partial<SliderProps>

const makeSut = ({ settings }: SutProps = {}): RenderResult => {
  return renderWithTheme(
    <Slider settings={settings}>
      <h1 key="1">1</h1>
      <h1 key="2">2</h1>
      <h1 key="3">3</h1>
    </Slider>
  )
}

describe('<Slider />', () => {
  it('should render with 1 active item', () => {
    const { container } = makeSut()
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(7)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })
})
