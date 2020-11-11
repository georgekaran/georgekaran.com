import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as SpaceStyles from '@/presentation/components/Space/Space.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${SpaceStyles.Wrapper} {
      min-height: calc(100vh - calc(165px + 5.6rem));

      ${media.lessThan('medium')`
        padding: 0 ${theme.spacings.xsmall};
        min-height: calc(100vh - calc(130px + 2.4rem));
      `};
    };

    ${SpaceStyles.ChildrenWrapper} {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    };
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: min(10rem, 20vw);
  `};
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.large};
    text-align: justify;
  `};
`
