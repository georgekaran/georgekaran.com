import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.black02};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacings.medium};
    height: 10rem;

    ${media.lessThan('medium')`
      height: 8rem;
    `}
  `}
`

export const IconGroup = styled.section`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.font.sizes.xlarge};
    height: ${theme.font.sizes.xlarge};
    margin-left: ${theme.spacings.small};
    cursor: pointer;

    > svg {
      color: ${theme.colors.green};
    }

    ${media.lessThan('medium')`
      width: ${theme.font.sizes.large};
      height: ${theme.font.sizes.large};
      margin-left: ${theme.spacings.xsmall};
    `}
  `}
`
