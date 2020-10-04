import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifiers = {
  large: () => css`
    width: 50rem;
  `
}

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    width: 100%;

    ${PlanetWrapper} {
      ${wrapperModifiers.large()};
    }

    ${OnionWrapper} {
      ${onionModifiers.large()};
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

    ${media.between('medium', 'large')`
      width: 32rem !important;
      height: 32rem !important;
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

  ${media.between('medium', 'large')`
    width: 72rem !important;
  `}
`

const orbirModifiers = {
  mobile: () => '14rem',
  large: () => '52rem',
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
  index: number,
  media: string
) => {
  let size = ''
  switch (media) {
    case 'mobile':
      size = '14rem'
      break
    case 'medium':
      size = '34rem'
      break
    default:
      size = '52rem'
  }

  return css`
    @keyframes orbit-${index} {
      0% {
        transform: rotate3d(0.46, 1, 0.46, ${degBegin}deg)
        translateX(${size})
        rotate3d(0.46, 1, 0.46, -${degBegin}deg);
      }
      100% {
        transform: rotate3d(0.46, 1, 0.46, ${degEnd}deg)
        translateX(${size})
        rotate3d(0.46, 1, 0.46, -${degEnd}deg);
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
    animation: orbit-${index} 14s infinite linear;
    left: 38%;
    top: 7%;

    ${media.lessThan('medium')`
      left: 43% !important;
      ${orbitMediaFactory(degBegin, degEnd, index, 'mobile')};
    `};

    ${media.between('medium', 'large')`
      ${orbitMediaFactory(degBegin, degEnd, index, 'medium')};
    `};

    ${media.greaterThan('large')`
      ${orbitMediaFactory(degBegin, degEnd, index, 'large')};
    `};
  `
  }
}`
