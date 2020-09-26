import React, { useState } from 'react'
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
      <MediaMatch greaterThan="medium" >
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>Projetos</S.MenuLink>
          <S.MenuLink>Contato</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <MediaMatch lessThan="medium" >
        <S.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>Projetos</S.MenuLink>
          <S.MenuLink>Contato</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
