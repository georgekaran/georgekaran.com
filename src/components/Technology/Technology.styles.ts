import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import { TechnologySize } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    background: ${transparentize(0.4, theme.colors.black04)};
    border-radius: 50%;
  `}
`

type ImageProps = {
  size: TechnologySize
}

const imageModifiers = {
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  medium: () => css`
    width: 8rem;
    height: 8rem;
  `,
  large: () => css`
    width: 12rem;
    height: 12rem;
  `
}

export const Image = styled.img<ImageProps>`
  ${({ size }) => css`
    object-fit: contain;

    ${!!size && imageModifiers[size]()};
  `}
`
