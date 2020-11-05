import NextImage from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HighlightBoxStyles from '@/presentation/components/HighlightBox/HighlightBox.styles'
import * as HeadingStyles from '@/presentation/components/Heading/Heading.styles'
import * as MediaMatch from '@/presentation/components/MediaMatch/MediaMatch'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "info media"
      "highlight media"
      "aboutMe aboutMe"
      "stack stack"
      "testimonial testimonial" ;
    grid-template-rows: auto auto auto 100rem auto;

    ${media.lessThan('medium')`
      grid-template-areas: "info" "media" "highlight" "aboutMe" "stack" "testimonial";
      grid-template-rows: auto auto auto auto auto auto;
      grid-template-columns: 1fr;
      padding: 0 0;
    `};

    ${media.between('medium', 'large')`
      grid-template-rows: auto auto auto 80rem auto;
    `};
  `}
`

export const InfoGroup = styled.section`
  grid-area: info;
`

export const MediaGroup = styled.section`
  grid-area: media;
  justify-self: center;
  position: relative;

  ${media.lessThan('medium')`
    width: 20em;
  `}
`

type ShapeProps = {
  x: string
  y: string
  height: string
  width: string
}

export const Shape = styled.div<ShapeProps>`
  ${({ x, y, height, width }) => css`
    position: absolute;
    top: ${y};
    left: ${x};
    height: ${height};
    width: ${width};
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

export const PresentationWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    display: inline-block;
  `}
`

export const Presentation = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    overflow: hidden;
    display: inline-block;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    border-right: .15em solid ${theme.colors.white}; /* The typwriter cursor */
    white-space: nowrap;
    animation: typewriter 2s steps(44) 800ms 1 normal both,
                blinkTextCursor 800ms steps(44) infinite normal;

    @keyframes typewriter{
      from{width: 0;}
      to { width: 100%; }
    }
    @keyframes blinkTextCursor{
      from{border-right-color: ${theme.colors.white};}
      to{border-right-color: transparent;}
    }
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
  `}
`

export const Photo = styled(NextImage)`
`

export const HighlightGroup = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
    grid-area: highlight;
    place-self: center;

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xsmall} 0;
    `}

    ${HighlightBoxStyles.Wrapper} {
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

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const AboutMeContentWrapper = styled.div`
  display: flex;

  ${MediaMatch.default} {
    flex: 1;
  }
`

export const HistoryWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const History = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    background: ${theme.colors.black02};
    border-radius: ${theme.border.radius};

    ${media.lessThan('small')`
      padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    `}
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    text-align: justify;

    ${media.lessThan('small')`
      font-size: 1.4rem;
    `}
  `}
`

export const TimelineWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
    padding: 0 ${theme.spacings.large};
  `}
`

export const Stack = styled.section`
  ${({ theme }) => css`
    grid-area: stack;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    };
  `}
`

export const StackPlanetWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    display: flex;
    justify-content: center;

    &:not(.aos-animate) * {
      animation: none !important;
    }
  `}
`

export const SliderWrapper = styled.div`
  max-width: calc(100vw - 9rem);
  width: 100%;
  overflow: hidden;

  ${media.lessThan('medium')`
    max-width: calc(100vw - 5rem);
  `}
`

export const TestimonialDescription = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.green02};
    font-weight: ${theme.font.light};
    font-size: 2.8rem;
    flex: 1;

    ${media.between('medium', 'large')`
      font-size: 2.4rem;
    `};

    ${media.lessThan('medium')`
      font-size: 1.8rem;
    `};
  `}
`

export const TestimonialDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;

  ${MediaMatch.default} {
    flex: 1;
  };

  ${media.lessThan('medium')`
    margin-bottom: 4rem;
  `};

  ${media.between('medium', 'large')`
    margin-bottom: 6rem;
  `};
`

export const TestimonialImageWrapper = styled.div`
  width: 45rem;
  margin: 0 auto;

  ${media.lessThan('medium')`
    max-width: 15rem;
    width: 100%;
  `};

  ${media.between('medium', 'large')`
    width: 30rem;
  `};
`

export const TestimonialImage = styled(NextImage)`
`

export const Testimonial = styled.section`
  ${({ theme }) => css`
    grid-area: testimonial;
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.large};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    };
  `}
`
