import React from 'react'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Github as GithubIcon } from '@styled-icons/feather/Github'

import { Logo } from '@/components/Logo'
import * as S from './Footer.styles'

export type FooterProps = {}

const Footer = () => (
  <S.Wrapper>
    <Logo hideOnMobile />
    <S.IconGroup>
      <S.IconWrapper as="a" href="#" aria-label="Email">
        <MailIcon />
      </S.IconWrapper>

      <S.IconWrapper as="a" href="#" aria-label="Linkedin">
        <LinkedinIcon />
      </S.IconWrapper>

      <S.IconWrapper as="a" href="#" aria-label="Github">
        <GithubIcon />
      </S.IconWrapper>
    </S.IconGroup>
  </S.Wrapper>
)

export default Footer
