import styled, { css } from 'styled-components'
import { SizeType } from '.'

const wrapperModifiers = {
  small: () => css`
  `,
  medium: () => css`
    width: 32rem;
    height: 32rem;
  `,
  large: () => css`

  `
}

type WrapperProps = {
  size: SizeType
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`

    ${!!size && wrapperModifiers[size]()};
  `}
`
