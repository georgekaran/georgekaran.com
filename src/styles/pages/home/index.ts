import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HB from '@/components/HighlightBox/HighlightBox.styles'
import * as HD from '@/components/Heading/Heading.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: "info media" "highlight media" "aboutMe aboutMe" "stack stack";

    ${media.lessThan('medium')`
      grid-template-areas: "info" "media" "highlight" "aboutMe" "stack";
      grid-template-columns: 1fr;
      padding: 0 0;
    `}
  `}
`

export const InfoGroup = styled.section`
  ${({ theme }) => css`
    grid-area: info;
  `}
`

export const MediaGroup = styled.section`
  ${({ theme }) => css`
    grid-area: media;
    justify-self: center;

    ${media.lessThan('medium')`
      width: 20em;
    `}
  `}
`

export const Job = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.medium};
    `}
  `}
`

export const Presentation = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
  `}
`

export const Photo = styled.img`
  width: 100%;
`

export const HighlightGroup = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
    grid-area: highlight;
    place-self: center;

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xsmall} 0;
    `}

    ${HB.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const AboutMe = styled.section`
  ${({ theme }) => css`
    grid-area: aboutMe;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};

    ${HD.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const AboutMeContentWrapper = styled.div`
  display: flex;
`

export const History = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const TimelineWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
    padding: 0 ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const Stack = styled.section`
  ${({ theme }) => css`
    grid-area: stack;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};

    ${HD.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`