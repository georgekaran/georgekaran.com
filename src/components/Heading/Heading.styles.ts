import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

type WrapperProps = Omit<HeadingProps, 'children'>

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`

  `,
  medium: (theme: DefaultTheme) => css`

  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
