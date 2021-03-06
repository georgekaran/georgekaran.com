import NextImage from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { transparentize } from 'polished'

const imageModifiers = {
  small: () => css`
    width: 5rem !important;
    height: 5rem !important;
  `,
  medium: () => css`
    width: 8rem !important;
    height: 8rem !important;
  `,
  large: () => css`
    width: 12rem;
    height: 12rem;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    background: ${transparentize(0.4, theme.colors.black04)};
    border-radius: 50%;

    ${media.lessThan('medium')`
      padding: 0.4rem;
    `};

    ${imageModifiers.large()};

    ${media.lessThan('medium')`
      ${imageModifiers.small()};
    `};

    ${media.between('medium', 'large')`
      ${imageModifiers.medium()};
    `};
  `}
`

export const Image = styled(NextImage)`
  ${() => css`
    object-fit: contain;
  `}
`
