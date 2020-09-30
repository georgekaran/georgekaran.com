import styled, { css } from 'styled-components'
import { SizeType } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 16rem;
    height: 16rem;
  `,
  medium: () => css`
    width: 32rem;
    height: 32rem;
  `,
  large: () => css`
    width: 50rem;
    height: 50rem;
  `
}

type WrapperProps = {
  size: SizeType
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    position: relative;
    ${!!size && onionModifiers[size]()};

    ${PlanetWrapper} {
      ${!!size && wrapperModifiers[size]()};
    }

    ${OnionWrapper} {
      ${!!size && onionModifiers[size]()};
    }
  `}
`

export const PlanetWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: auto;
    animation-name: FloatAnimation;
    animation-duration: 2000ms;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;

    @keyframes FloatAnimation {
      0% {
          margin-top: 0px;
      }

      100% {
        margin-top: 20px;
      }
    }

    & > .front {
      position: absolute;
      left: 0;
      top: 0;
      width: 96%;
      z-index: ${theme.layers.overlay};
    }

  `}
`

const onionModifiers = {
  small: () => css`
    width: 32rem;
  `,
  medium: () => css`
    width: 64rem;
  `,
  large: () => css`
    width: 100rem;
  `
}

export const OnionWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);

  animation-name: Float2Animation;
  animation-duration: 2000ms;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;

  @keyframes Float2Animation {
    0% {
        margin-top: 0px;
    }

    100% {
      margin-top: -20px;
    }
  }
`
