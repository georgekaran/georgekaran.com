import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
    animation-name: FloatAnimation;
    animation-duration: 2000ms;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;

    @keyframes FloatAnimation {
      0% {
        transform: translateY(0px);
      }

      100% {
        transform: translateY(20px);
      }
    }
  `}
`

export const PlanetWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: auto;
    width: 50%;
    height: 50%;

    & > .front {
      position: absolute;
      left: 0;
      top: 0;
      width: 96%;
      z-index: ${theme.layers.overlay};
    }

  `}
`

export const OnionWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 100%;
`

const orbirModifiers = {
  calcDegBegin: (index: number, totalElements: number) => Math.floor(360 / totalElements) * index,
  calcDegEnd: (deg: number) => deg + 360
}

type OrbitProps = {
  index: number
  totalElements: number
}

const orbitMediaFactory = (
  degBegin: number,
  degEnd: number,
  index: number
) => {
  return css`
    @keyframes orbit-${index} {
      0% {
        transform: rotate3d(0.5, 1, 0.5, ${degBegin}deg)
        translateX(min(42vw, 570px))
        rotate3d(0.5, 1, 0.5, -${degBegin}deg);
      }
      100% {
        transform: rotate3d(0.5, 1, 0.5, ${degEnd}deg)
        translateX(min(42vw, 570px))
        rotate3d(0.5, 1, 0.5, -${degEnd}deg);
      }
    }
  `
}

export const OrbitElement = styled.div<OrbitProps>`
  ${({ index, totalElements }) => {
    const degBegin = orbirModifiers.calcDegBegin(index, totalElements)
    const degEnd = orbirModifiers.calcDegEnd(degBegin)

    return css`
      position: absolute;
      left: 38%;
      top: 20%;
      animation: orbit-${index} 14s infinite linear;

      ${media.lessThan('small')`
        left: 36%;
        top: 15%;
      `}

      ${orbitMediaFactory(degBegin, degEnd, index)};
    `
  }
}`
