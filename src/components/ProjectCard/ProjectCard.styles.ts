import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient05};
    max-width: 50rem;
    min-width: 28rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 92% 1fr;
    border-radius: 4px;
    padding: ${theme.spacings.small} 0;

    & > * {
      grid-column: 2;
    }
  `}
`

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `};
  `}
`

export const TagWrapper = styled.div`
  display: flex;
`

export const Tag = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.purple};
    border-radius: 0.4rem;
    letter-spacing: 1px;

    &:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('small')`
      display: none;
    `};
  `}
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 38rem;
  grid-column: 1 / 4;

  ${media.lessThan('small')`
    height: 24rem;
  `};

  ${media.between('small', 'medium')`
    height: 28rem;
  `};
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};

    ${media.lessThan('small')`
      font-size: 1.2rem;
    `};
  `}
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
