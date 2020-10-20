import '@/test/mock-match-media'
import React from 'react'

import { Slider, SliderProps } from '.'
import { render } from '@/test/helpers'
import { RenderResult } from '@testing-library/react'

type SutProps = Partial<SliderProps>

const makeSut = ({ settings }: SutProps = {}): RenderResult => {
  return render(
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
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })

  it('should render with vertical slider', () => {
    const { container } = makeSut({ settings: { verticalSwiping: true, vertical: true } })
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
  })
})
