import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'xlarge' | 'large'
}

const Heading = ({ children, size = 'xlarge' }: HeadingProps) => (
  <S.Wrapper size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
