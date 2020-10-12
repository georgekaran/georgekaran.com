import React, { useState } from 'react'
import Link from 'next/link'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './Menu.styles'
import { Logo } from '@/components/Logo'
import { MediaMatch } from '@/components/MediaMatch'

export type MenuProps = {}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <Logo hideOnMobile />

      <MediaMatch className="flex" greaterThan="medium" >
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink data-testid="home-link">Home</S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink data-testid="projects-link">Projetos</S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink data-testid="contact-link">Contato</S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink data-testid="home-link-mobile">Home</S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink data-testid="projects-link-mobile">Projetos</S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink data-testid="contact-link-mobile">Contato</S.MenuLink>
          </Link>
        </S.MenuGroup>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
