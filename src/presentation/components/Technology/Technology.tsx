import React from 'react'
import * as S from './Technology.styles'

export type TechnologySize = 'small' | 'medium' | 'large'

export type TechnologyProps = {
  image: string
  alt: string
}

const Technology = ({ image, alt }: TechnologyProps) => (
  <S.Wrapper data-testid="technology-wrapper">
    <S.Image
      src={image}
      alt={alt}
    />
  </S.Wrapper>
)

export default Technology
