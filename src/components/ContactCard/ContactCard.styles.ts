import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient03};
    height: 9rem;
    width: 36rem;
    padding: 1px;
    position: relative;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    background: ${theme.colors.black};
    padding: 0 ${theme.spacings.small};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.font.sizes.xxlarge};
    height: ${theme.font.sizes.xxlarge};
    margin-right: ${theme.spacings.small};
    color: ${theme.colors.green};

    &.pointer {
      cursor: pointer;
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    &[aria-hidden="false"] {
      opacity: 1;
    }

    ${IconWrapper} {
      margin-left: ${theme.spacings.small};
      margin-right: 0;
    }

    ${ContentWrapper} {
      justify-content: flex-end;
      background: ${transparentize(0.2, theme.colors.black)};
    }
  `}
`

export const PreviewLink = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
