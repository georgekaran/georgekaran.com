import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

type WrapperProps = Omit<HeadingProps, 'children'>

const wrapperModifiers = {
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
