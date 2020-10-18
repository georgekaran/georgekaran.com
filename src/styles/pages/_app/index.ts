import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as F from '@/components/Footer/Footer.styles'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    flex: 1;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.black};
    align-items: center;
    min-height: 100vh;

    ${F.Wrapper} {
      width: 100%;
    }
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.medium};
    min-height: calc(100vh - calc(165px + 5.6rem));

    ${media.lessThan('medium')`
      padding: 0 ${theme.spacings.xsmall};
      min-height: calc(100vh - calc(130px + 2.4rem));
    `};
  `}
`
