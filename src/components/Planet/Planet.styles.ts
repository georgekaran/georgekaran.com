import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { SizeType } from '.'
import * as Tech from '@/components/Technology/Technology.styles'

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

    ${media.lessThan('medium')`
      width: auto;
    `}

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

    ${media.lessThan('medium')`
      width: 16rem !important;
      height: 16rem !important;
    `}

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
    width: 36rem;
  `,
  medium: () => css`
    width: 72rem;
  `,
  large: () => css`
    width: 116rem;
  `
}

export const OnionWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);

  ${media.lessThan('medium')`
    width: 30rem !important;
  `}
`

const orbirModifiers = {
  small: () => '18rem',
  medium: () => '34rem',
  large: () => '52rem',
  calcDegBegin: (index: number, totalElements: number) => Math.floor(360 / totalElements) * index,
  calcDegEnd: (deg: number) => deg + 360
}

type OrbitProps = {
  size: SizeType
  index: number
  totalElements: number
}

export const OrbitElement = styled.div<OrbitProps>`
  ${({ size, index, totalElements }) => {
    const degBegin = orbirModifiers.calcDegBegin(index, totalElements)
    const degEnd = orbirModifiers.calcDegEnd(degBegin)

    return css`
    position: absolute;
    animation: orbit-${index} 14s infinite linear;
    left: 38%;
    top: 7%;

    ${media.lessThan('medium')`
      animation: orbit-${index}-mobile 14s infinite linear;

      ${Tech.Image} {
        width: 3rem;
        height: 3rem;
      }
    `};

    @keyframes orbit-${index}-mobile {
      0% {
        transform: rotate3d(0.46, 1, 0.46, ${degBegin}deg)
        translateX(14rem)
        rotate3d(0.46, 1, 0.46, -${degBegin}deg);
      }
      100% {
        transform: rotate3d(0.46, 1, 0.46, ${degEnd}deg)
        translateX(14rem)
        rotate3d(0.46, 1, 0.46, -${degEnd}deg);
      }
    }

    @keyframes orbit-${index} {
      0% {
        transform: rotate3d(0.46, 1, 0.46, ${degBegin}deg)
        translateX(${orbirModifiers[size]()})
        rotate3d(0.46, 1, 0.46, -${degBegin}deg);
      }
      100% {
        transform: rotate3d(0.46, 1, 0.46, ${degEnd}deg)
        translateX(${orbirModifiers[size]()})
        rotate3d(0.46, 1, 0.46, -${degEnd}deg);
      }
    }
  `
}
  }
`
