import React, { useEffect, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'

type UseStarsProps = {
  stars: number
  wrapperDelimiter: React.RefObject<HTMLElement>
}

type StarProps = {
  top: number
  left: number
}

const Star = styled.div<StarProps>`
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

const useStars = ({
  stars,
  wrapperDelimiter
}: UseStarsProps) => {
  const [starsArr, setStarsArr] = useState<React.ReactNode[]>([])

  const generateStars = useCallback(() => {
    const wrapper = wrapperDelimiter.current
    if (wrapper == null) {
      return
    }

    const array: React.ReactNode[] = []
    while (array.length !== stars) {
      const top = Math.floor(Math.random() * wrapper.offsetHeight)
      const left = Math.floor(Math.random() * wrapper.offsetWidth)
      array.push(<Star
        data-testid="star"
        top={top}
        left={left}
      />)
    }

    setStarsArr(array)
  }, [stars, wrapperDelimiter])

  useEffect(() => {
    generateStars()
  }, [generateStars])

  return starsArr
}

export default useStars
