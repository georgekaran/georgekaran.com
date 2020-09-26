import React from 'react'
import * as S from './Main.styles'

type Props = {
  title?: string
}

const Main: React.FC<Props> = ({
  title = 'Next-Boilerplate'
}: Props) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo src="/img/icon-192.png" alt="Atom image" />
        <S.Title data-testid="title">{title}</S.Title>
      </S.LogoWrapper>
      <S.Description>A simple boilerplate to work with Typescript, React, NextJs and Styled Components</S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="Person on a computer" />
    </S.Wrapper>
  )
}

export default Main
