import React from 'react'
import * as S from './Technology.styles'

export type TechnologySize = 'small' | 'medium' | 'large'

export type TechnologyProps = {
  image: string
  alt: string
  size?: TechnologySize
}

const Technology = ({ image, alt, size = 'medium' }: TechnologyProps) => (
  <S.Wrapper data-testid="technology-wrapper">
    <S.Image
      src={image}
      alt={alt}
      size={size}
    />
  </S.Wrapper>
)

export default Technology
