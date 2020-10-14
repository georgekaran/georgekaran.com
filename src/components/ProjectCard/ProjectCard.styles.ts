import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient05};
    max-width: 50rem;
    min-width: 28rem;
    max-height: 686px;
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

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.xsmall};
    `}
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
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.small};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `};
  `}
`

export const Tag = styled.span`
  ${({ theme }) => css`
    font-size: 1.2rem;
    font-weight: ${theme.font.medium};
    text-transform: uppercase;
    color: ${theme.colors.white};
    padding: 0.4rem;
    background: ${theme.colors.purple};
    border-radius: 0.4rem;
    height: 2.6rem;
    letter-spacing: 0.4px;

    &:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      font-size: 1rem;
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

    ${media.lessThan('medium')`
      font-size: 1.2rem;
      margin: ${theme.spacings.xsmall} 0;
    `};
  `}
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
