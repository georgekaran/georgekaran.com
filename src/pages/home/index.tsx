import React from 'react'

import * as S from './styles'
import { HighlightBox } from '@/components/HighlightBox'
import { Heading } from '@/components/Heading'
import { Achievement, Timeline } from '@/components/Timeline'

const achievements: Achievement[] = [
  {
    date: new Date('2020-08-21T00:00:00'),
    title: 'Node JS com microservicos',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'education'
  },
  {
    date: new Date('2019-08-21T00:00:00'),
    title: 'Node JS com microservicos',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'event'
  },
  {
    date: new Date('2019-08-22T00:00:00'),
    title: 'Node JS com microservicos',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'professional'
  },
  {
    date: new Date('2018-08-21T00:00:00'),
    title: 'Node JS com microservicos',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'event'
  },
  {
    date: new Date('2018-08-21T00:00:00'),
    title: 'Node JS com microservicos',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'education'
  }
]

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.InfoGroup>
        <S.Job>
          Fullstack engineer
        </S.Job>
        <S.Presentation>
          Olá, eu sou George
        </S.Presentation>
        <S.Description>
          Um desenvolvedor apaixonado por tecnologia e UI design!
        </S.Description>
      </S.InfoGroup>

      <S.HighlightGroup>
        <HighlightBox primaryText="2" secondaryText="anos de experiência" />
        <HighlightBox primaryText="8" secondaryText="projetos desenvolvidos" />
        <HighlightBox primaryText="+10" secondaryText="cursos concluídos" />
      </S.HighlightGroup>

      <S.MediaGroup>
        <S.Photo src="/img/personal-photo.png" alt="George photo facing the camera"/>
      </S.MediaGroup>

      <S.AboutMe>
        <Heading>Sobre mim</Heading>

        <S.AboutMeContentWrapper>
          <S.History>
            <S.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies amet orci a pulvinar et cursus.
              Pulvinar in nulla arcu duis hendrerit eget amet.
              Turpis pellentesque pulvinar eu cras a.
              In viverra curabitur vitae id. Tellus eleifend habitant sem congue.
              Eget gravida tincidunt sollicitudin luctus non tincidunt. Volutpat eget enim quis rhoncus placerat lectus.
              Morbi amet congue risus curabitur vitae amet, eu posuere turpis. Porttitor lorem pretium quis felis donec sed nulla tristique.
            </S.Paragraph>

            <S.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies amet orci a pulvinar et cursus.
              Pulvinar in nulla arcu duis hendrerit eget amet.
              Turpis pellentesque pulvinar eu cras a. In viverra curabitur vitae id.
            </S.Paragraph>
          </S.History>

          <S.TimelineWrapper>
            <Timeline achievements={achievements} />
          </S.TimelineWrapper>
        </S.AboutMeContentWrapper>
      </S.AboutMe>
    </S.Wrapper>
  )
}

export default Home
