import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export const Fog = styled.div`
  position: absolute;
  width: 100%;

  &.fog-1 {
    top: 20%;
  }
  &.fog-2 {
    top: 70%;
  }
`

type StarProps = {
  top: number
  left: number
}

export const Star = styled.div<StarProps>`
  ${({ theme, top, left }) => css`
    position: absolute;
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
    top: ${top}px;
    left: ${left}px;
    background-color: ${theme.colors.white};
  `}
`

export const ChildrenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
