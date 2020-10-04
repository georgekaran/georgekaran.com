import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { transparentize } from 'polished'

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
  `}
`

const imageModifiers = {
  small: () => css`
    width: 4rem !important;
    height: 4rem !important;
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

export const Image = styled.img`
  ${() => css`
    object-fit: contain;

    ${imageModifiers.large()};

    ${media.lessThan('medium')`
      ${imageModifiers.small()};
    `};

    ${media.between('medium', 'large')`
      ${imageModifiers.medium()};
    `};
  `}
`
