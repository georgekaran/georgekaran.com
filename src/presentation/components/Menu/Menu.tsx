import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './Menu.styles'
import { Logo } from '@/presentation/components/Logo'
import { MediaMatch } from '@/presentation/components/MediaMatch'
import useI18N from '@/presentation/hooks/usei18n'
import { Select } from '@/presentation/components/Select'
import { Language, LanguageResource } from '@/domain/models/language'
import LanguageContext from '@/presentation/contexts/language'

export type MenuProps = {}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const i18n = useI18N()
  const router = useRouter()

  const closeMenu = () => {
    setIsOpen(false)
  }

  const onLanguageChange = (lan: string) => {
    switch (lan) {
      case LanguageResource.en:
        setLanguage!(Language.en)
        break
      case LanguageResource.es:
        setLanguage!(Language.es)
        break
      default:
        setLanguage!(Language.pt)
    }
  }

  return (
    <S.Wrapper>
      <Logo hideOnMobile />

      <MediaMatch
        className="flex"
        greaterThan="medium"
      >
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink
              isActive={router.pathname === '/'}
              data-testid="home-link"
            >
              {i18n.t('home')}
            </S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink
            isActive={router.pathname === '/projects'}
            data-testid="projects-link"
            >
              {i18n.t('projects')}
            </S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink
            isActive={router.pathname === '/contact'}
            data-testid="contact-link"
            >
              {i18n.t('contact')}
            </S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <MediaMatch display="contents" greaterThan="medium" >
        <Select
          ariaLabel={i18n.t('language')}
          initialValue={LanguageResource[language!]}
          options={Object.values(LanguageResource)}
          onChange={onLanguageChange}
        />
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label={i18n.t('open_menu')} onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.MenuFull data-testid="menu-full" aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label={i18n.t('close_menu')} onClick={() => setIsOpen(false)} />
        <S.SelectWrapper>
          <Select
            ariaLabel={i18n.t('language')}
            initialValue={LanguageResource[language!]}
            options={Object.values(LanguageResource)}
            onChange={onLanguageChange}
          />
        </S.SelectWrapper>
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink
              isActive={router.pathname === '/'}
              data-testid="home-link-mobile"
              onClick={closeMenu}
              >
                {i18n.t('home')}
                </S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink
            isActive={router.pathname === '/projects'}
            data-testid="projects-link-mobile"
            onClick={closeMenu}
            >
              {i18n.t('projects')}
            </S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink
            isActive={router.pathname === '/contact'}
              data-testid="contact-link-mobile"
              onClick={closeMenu}
              >
                {i18n.t('contact')}
              </S.MenuLink>
          </Link>
        </S.MenuGroup>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
