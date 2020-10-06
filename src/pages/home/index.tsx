import React, { useState } from 'react'

import * as S from '@/styles/pages/home'
import { HighlightBox } from '@/components/HighlightBox'
import { Heading } from '@/components/Heading'
import { Achievement, Timeline } from '@/components/Timeline'
import { Space } from '@/components/Space'
import { Planet } from '@/components/Planet'
import { Technology } from '@/components/Technology'
import { MediaMatch } from '@/components/MediaMatch'

const Home: React.FC = () => {
  const [achievements] = useState<Achievement[]>(
    [
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
  )

  const [technologies] = useState<React.ReactNode[]>(
    [
      <Technology key="react" image="/img/technology/react.png" alt="React" />,
      <Technology key="node" image="/img/technology/nodejs.png" alt="Node JS" />,
      <Technology key="golang" image="/img/technology/golang.png" alt="Golang" />,
      <Technology key="java" image="/img/technology/java.png" alt="Java" />,
      <Technology key="typescript" image="/img/technology/typescript.png" alt="Typescript" />,
      <Technology key="mongo" image="/img/technology/mongo.png" alt="Mongo DB" />,
      <Technology key="aws" image="/img/technology/aws.png" alt="AWS" />,
      <Technology key="docker" image="/img/technology/docker.png" alt="Docker" />,
      <Technology key="postgresql" image="/img/technology/postgresql.png" alt="Postgres SQL" />
    ]
  )

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

          <MediaMatch display="flex" greaterThan="medium">
            <S.TimelineWrapper>
              <Timeline achievements={achievements} />
            </S.TimelineWrapper>
          </MediaMatch>
        </S.AboutMeContentWrapper>
      </S.AboutMe>

      <S.Stack>
        <Heading>Minha stack</Heading>
        <Space stars={20}>
          <S.StackPlanetWrapper>
            <Planet
              orbitElements={technologies}
            />
          </S.StackPlanetWrapper>
        </Space>
      </S.Stack>

      <S.Testimonial>
        <Heading>Depoimentos</Heading>
      </S.Testimonial>
    </S.Wrapper>
  )
}

export default Home
