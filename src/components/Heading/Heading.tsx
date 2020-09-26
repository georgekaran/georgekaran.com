import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'large' | 'medium'
}

const Heading = ({ children, size = 'large' }: HeadingProps) => (
  <S.Wrapper size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
