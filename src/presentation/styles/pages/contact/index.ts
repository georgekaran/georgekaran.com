import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    display: grid;
    grid-template-columns: 100%;

    ${media.lessThan('1170px')`
      grid-template-rows: auto auto 100%;
    `}

    ${media.lessThan('medium')`
      margin: ${theme.spacings.small} 0;
    `}
  `}
`

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.green};
    max-width: 50rem;
    margin-top: ${theme.spacings.medium};
  `}
`

export const BoxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    margin: ${theme.spacings.medium} 0;

    ${media.lessThan('1170px')`
      justify-content: center;
    `}
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 36rem;
  height: 55rem;

  ${media.lessThan('1170px')`
    display: none;
  `}
`

export const ContactBox = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black01};
    flex: 1;
    height: 40rem;
    max-height: 53rem;
    max-width: 87rem;
    z-index: ${theme.layers.overlay};
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: ${theme.spacings.medium};
    gap: ${theme.spacings.medium};
    align-items: center;
    justify-items: center;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      height: 100%;
    `}
  `}
`

export const TransparentBox = styled.div`
  ${({ theme }) => css`
    background: ${transparentize(0.4, theme.colors.green)};
    height: 100%;
    margin-left: -10rem;
  `}
`

export const ImageAbsolute = styled.div`
  position: absolute;
  bottom: 2.4rem;
  right: 2.4rem;
`
