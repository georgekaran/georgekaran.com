import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'xlarge' | 'large'
} & React.HTMLAttributes<HTMLHeadingElement>

const Heading = ({ children, size = 'xlarge', ...props }: HeadingProps) => (
  <S.Wrapper size={size} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading
