import React from 'react'
import * as S from './Technology.styles'

export type TechnologySize = 'small'

export type TechnologyProps = {
  image: string
  alt: string
  size?: TechnologySize
}

const Technology = ({ image, alt, size = 'small' }: TechnologyProps) => (
  <S.Wrapper>
    <S.Image
      src={image}
      alt={alt}
      size={size}
    />
  </S.Wrapper>
)

export default Technology
