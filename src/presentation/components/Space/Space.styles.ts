import styled from 'styled-components'

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

export const ChildrenWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
