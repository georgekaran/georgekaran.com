import React from 'react'
import * as S from './Space.styles'

export type SpaceProps = {}

const Space = () => {
  return (
    <S.Wrapper>
      <S.Fogs>
        <S.Fog>
          <svg data-testid="fog-1" viewBox="0 0 1440 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 33C558.968 -9.4192 921.135 -11.8052 1679 33V176C934.27 108.279 549.75 95.4285 0 176V33Z" fill="#27272D"/>
          </svg>
        </S.Fog>

        <S.Fog>
          <svg data-testid="fog-2" viewBox="0 0 1440 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 92.9999C1019.81 -30.0601 1385.43 -29.8472 1679 92.9999V236C1276.14 100.611 878.676 116.591 0 236V92.9999Z" fill="#27272D"/>
          </svg>
        </S.Fog>
      </S.Fogs>

    </S.Wrapper>
  )
}

export default Space
