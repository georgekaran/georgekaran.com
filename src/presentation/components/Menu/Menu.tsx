import React, { useState } from 'react'
import Link from 'next/link'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './Menu.styles'
import { Logo } from '@/presentation/components/Logo'
import { MediaMatch } from '@/presentation/components/MediaMatch'
import useI18N from '@/presentation/hooks/usei18n'

export type MenuProps = {}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const i18n = useI18N()

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <Logo hideOnMobile />

      <MediaMatch className="flex" greaterThan="medium" >
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink data-testid="home-link">{i18n.t('home')}</S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink data-testid="projects-link">{i18n.t('projects')}</S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink data-testid="contact-link">{i18n.t('contact')}</S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label={i18n.t('open_menu')} onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.MenuFull data-testid="menu-full" aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label={i18n.t('close_menu')} onClick={() => setIsOpen(false)} />
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink data-testid="home-link-mobile" onClick={closeMenu}>{i18n.t('home')}</S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink data-testid="projects-link-mobile" onClick={closeMenu}>{i18n.t('projects')}</S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink data-testid="contact-link-mobile" onClick={closeMenu}>{i18n.t('contact')}</S.MenuLink>
          </Link>
        </S.MenuGroup>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
