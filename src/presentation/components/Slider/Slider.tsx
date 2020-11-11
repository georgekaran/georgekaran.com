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
  speed: 1000,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 12000,
  pauseOnHover: true,
  slidesToScroll: 1
}

const Slider = ({ children, settings = defaultSettings }: SliderProps) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export default Slider
