import React, { useRef } from 'react'

import * as S from './Space.styles'
import useStars from '@/presentation/hooks/useStars'

export type SpaceProps = {
  stars?: number
  children?: React.ReactNode
}

const Space = ({ stars = 0, children }: SpaceProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const starNodes = useStars({ stars, wrapperDelimiter: wrapperRef })

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Fog className="fog-1">
        <svg data-testid="fog-1" viewBox="0 0 1440 176" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 32.7683C479.401 -9.71966 790.014 -12.1096 1440 32.7683V176C801.279 108.169 471.495 95.2979 0 176V32.7683Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="1387.5" y1="87.9999" x2="48.0001" y2="87.9999" gradientUnits="userSpaceOnUse">
              <stop stopColor="#27272D" stopOpacity="0"/>
              <stop offset="0.506491" stopColor="#27272D"/>
              <stop offset="1" stopColor="#27272D" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>

      </S.Fog>
      <S.Fog className="fog-2">
        <svg data-testid="fog-2" viewBox="0 0 1431 235" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-9 92.1308C865.643 -30.8166 1179.21 -30.6039 1431 92.1308V235C1085.48 99.7352 744.6 115.701 -9 235V92.1308Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="1368.5" y1="117" x2="30.5" y2="117" gradientUnits="userSpaceOnUse">
              <stop stopColor="#27272D" stopOpacity="0"/>
              <stop offset="0.506491" stopColor="#27272D"/>
              <stop offset="1" stopColor="#27272D" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </S.Fog>

      {starNodes.map((star, i) => (
        <React.Fragment key={`star-${i}`}>
          {star}
        </React.Fragment>
      ))}

      <S.ChildrenWrapper>
        {children}
      </S.ChildrenWrapper>
    </S.Wrapper>
  )
}

export default Space
