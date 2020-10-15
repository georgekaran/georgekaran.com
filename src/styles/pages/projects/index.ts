import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ProjectCardStyles from '@/components/ProjectCard/ProjectCard.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    display: grid;
    grid-template-columns: 100%;

    ${media.lessThan('medium')`
      margin: ${theme.spacings.small} 0;
    `}
  `}
`

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.green};
    max-width: 35rem;
    margin-top: ${theme.spacings.medium};
  `}
`

export const ProjectsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 24rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(45rem, 1fr));
    gap: 9rem;
    flex-wrap: wrap;
    justify-content: space-evenly;

    ${media.lessThan('1072px')`
      grid-template-columns: 1fr;
      margin-top: 4rem;
      gap: 4rem;

      &:nth-child(2n+2) {
        margin-top: ${theme.spacings.small} !important;
      };
    `};

    ${ProjectCardStyles.Wrapper} {
      justify-self: center;

      &:nth-child(2n+2) {
        margin-top: -16rem;
      };

      ${media.lessThan('1072px')`
        &:nth-child(2n+2) {
          margin-top: 0px !important;
        };
      `};
    };
  `}
`
