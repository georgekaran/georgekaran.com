import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

type WrapperProps = Omit<HeadingProps, 'children'>

const wrapperModifiers = {
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
