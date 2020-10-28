import React from 'react'

import * as S from './Technology.styles'

export type TechnologySize = 'small' | 'medium' | 'large'

export type TechnologyProps = {
  image: string
  alt: string
}

const Technology = ({ image, alt }: TechnologyProps) => (
  <S.Wrapper>
    <S.Image
      src={image}
      alt={alt}
      height={120}
      width={120}
    />
  </S.Wrapper>
)

export default Technology
