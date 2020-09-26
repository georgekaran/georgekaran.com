import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  `}
`

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${MenuLink} {
      margin-left: ${theme.spacings.small};
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
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
