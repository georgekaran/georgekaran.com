import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export const Fog = styled.div`
  width: 100%;
`

export const Fogs = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
