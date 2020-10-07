import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as F from '@/components/Footer/Footer.styles'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.black};
    align-items: center;
    overflow-x: hidden;

    ${F.Wrapper} {
      width: 100%;
    }
  `}
`

export const MenuWrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.medium};

    ${media.lessThan('medium')`
      padding: 0 ${theme.spacings.xsmall};
    `};
  `}
`
