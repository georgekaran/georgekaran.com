import React from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './Slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings?: SliderSettings
}

const defaultSettings: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slider = ({ children, settings = defaultSettings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default Slider
