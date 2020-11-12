import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import MediaMatch from '@/presentation/components/MediaMatch/MediaMatch'
import * as Select from '@/presentation/components/Select/Select.styles'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0px;
    width: 100%;
    background: ${theme.colors.black};
    z-index: ${theme.layers.alwaysOnTop};
    padding: ${theme.spacings.small} ${theme.spacings.medium};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
      justify-content: space-between;
    `};

    ${Select.Wrapper} {
      flex: 0 0 130px;
    };

    ${MediaMatch.default} {
      .flex {
        flex: 1;
        justify-content: center;
        align-items: center;
      }
    };
  `}
`

type MenuLinkProps = {
  isActive: boolean
}

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, isActive }) => css`
    color: ${theme.colors.white} !important;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      height: 2px;
      background: ${isActive ? theme.colors.green : 'none'};
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
    }
  `}
`

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${({ theme }) => css`
    ${MenuLink} {
      &:not(:first-child) {
        margin-left: ${theme.spacings.medium};
      }
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    cursor: pointer;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    background: ${theme.colors.black};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};
    opacity: ${isOpen ? 1 : 0};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      color: ${theme.colors.white};
      cursor: pointer;
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
    };

    ${MenuGroup} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    };

    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      margin-left: 0 !important;
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    };
  `}
`

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 6.4rem 1.6rem 0 1.6rem;
`
