import React, { useState, useEffect, useRef } from 'react'

import * as S from './Timeline.styles'
import useIsomorphicLayoutEffect from '@/presentation/hooks/useIsomorphicLayoutEffect'

export type Tag = 'education' | 'event' | 'professional' | 'talk'

export type Achievement = {
  date: Date
  title: string
  description: string
  tag: Tag
}

export type TimelineProps = {
  achievements: Achievement[]
  height?: string
} & React.HTMLAttributes<HTMLDivElement>

const Timeline = ({ achievements, ...props }: TimelineProps) => {
  const useIsomorphicEffect = useIsomorphicLayoutEffect(global.window)
  const [years, setYears] = useState<number[]>([])
  const [scrollHeight, setScrollHeight] = useState<number>(700)
  const wrapper = useRef<HTMLElement>(null)

  useEffect(() => {
    const filterUniqueYears = () => {
      const allYears = achievements
        .map(a => a.date.getFullYear())
        .sort((y1, y2) => y2 - y1)

      const finalYears: number[] = []
      for (const year of allYears) {
        if (!finalYears.includes(year)) {
          finalYears.push(year)
        }
      }
      setYears(finalYears)
    }

    filterUniqueYears()
  }, [achievements])

  useIsomorphicEffect(() => {
    if (wrapper.current != null && years.length !== 0) {
      const scrollHeight = wrapper.current.scrollHeight
      setScrollHeight(scrollHeight)
    }
  }, [years, wrapper])

  return (
    <S.Wrapper ref={wrapper} {...props}>
      <S.YearGroup>
        {years.map(year => (
          <S.YearEventsBox key={year}>
            <S.YearColumn>
              <S.Year>{year}</S.Year>
            </S.YearColumn>
            <S.EventsColumn data-testid={`events-${year}`}>
              {achievements
                .filter(achievement => achievement.date.getFullYear() === year)
                .map(event => (
                  <S.Event key={event.title}>
                    <S.Tag type={event.tag}>{event.tag}</S.Tag>
                    <S.Flex>
                      <S.Title>{event.title}</S.Title>
                      <S.Date>{`${event.date.toLocaleDateString()}`}</S.Date>
                    </S.Flex>
                    <S.Description>{event.description}</S.Description>
                  </S.Event>
                ))}
            </S.EventsColumn>
          </S.YearEventsBox>
        ))}
      </S.YearGroup>
      <S.Line scrollHeight={scrollHeight} />
    </S.Wrapper>
  )
}

export default Timeline
