import NextImage from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-radius: 2.4rem;
    background: ${theme.colors.gradient04};
    text-shadow: 1px 1px 4px ${theme.colors.black01};
    max-width: 75rem;
    width: 100%;

    ${media.lessThan('large')`
      max-width: 50rem;
    `}
  `}
`

export const TestimonialWrapper = styled.div`
  display: flex;
`

export const Testimonial = styled.p`
  ${({ theme }) => css`
    flex: 0.85;
    font-weight: ${theme.font.medium};
    font-size: 2rem;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    letter-spacing: -1px;

    ${media.lessThan('medium')`
      padding: 0;
      font-size: 1.4rem;
      flex: 0.9;
    `};
  `}
`

export const Quotes = styled.i`
  ${({ theme }) => css`
    flex: 0.15;
    font-weight: ${theme.font.bold};
    font-size: 7.2rem;
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      font-size: 5rem;
      margin-left: ${theme.spacings.xxsmall};
      flex: 0.1;
    `};
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 4.8rem;
    height: 4.8rem;

    ${media.lessThan('medium')`
      width: ${theme.font.sizes.xxlarge};
      height: ${theme.font.sizes.xxlarge};
    `};
  `}
`

export const Image = styled(NextImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall} ${theme.spacings.xxsmall} 0;

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xsmall} 0 0 0;
    `};
  `}
`

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const TitleBox = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`

export const Author = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    margin-right: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      margin-right: 0px;
      font-size: 12px;
    `};
  `}
`

export const Company = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.green};
    font-weight: ${theme.font.bold};
    white-space: nowrap;

    ${media.lessThan('medium')`
      font-size: 12px;
    `};
  `}
`
