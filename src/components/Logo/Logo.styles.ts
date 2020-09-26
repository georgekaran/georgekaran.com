import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

type WrapperProps = LogoProps

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      .logo-name {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ hideOnMobile }) => css`
    width: 13rem;

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile()}
  `}
`
