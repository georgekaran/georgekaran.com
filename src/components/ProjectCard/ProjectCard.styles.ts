import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient05};
    max-width: 50rem;
    display: grid;
    grid-template-columns: 1fr 45rem 1fr;

    & > * {
      grid-column: 2;
    }
  `}
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
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
  `}
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 38rem;
  grid-column: 1 / 4;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 16px 0;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
  `}
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button``
