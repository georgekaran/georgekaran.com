import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Ellipse = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%2328F5BEFF' stroke-width='2' stroke-dasharray='8' stroke-dashoffset='71' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 100px;
    width: 8rem;
    height: 8rem;
    margin-right: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      width: 6rem;
      height: 6rem;
    `}
  `}
`

export const PrimaryText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.green01};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SecondaryText = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
