import React, { useState, useEffect } from 'react'

import * as S from './Timeline.styles'

export type Tag = 'education' | 'event' | 'professional'

export type Achievement = {
  date: Date
  title: string
  description: string
  tag: Tag
}

export type TimelineProps = {
  achievements: Achievement[]
  height?: string
}

const Timeline = ({ achievements }: TimelineProps) => {
  const [years, setYears] = useState<number[]>([])

  useEffect(() => {
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
  }, [achievements])

  return (
    <S.Wrapper>
      <S.YearGroup>
        {years.map(year => (
          <S.YearEventsBox key={year}>
            <S.YearColumn>
              <S.Year>{year}</S.Year>
            </S.YearColumn>
            <S.EventsColumn>
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
      <S.Line />
    </S.Wrapper>
  )
}

export default Timeline
