import React from 'react'

import * as S from '@/presentation/styles/pages/projects'
import * as Animations from '@/presentation/styles/animations'
import { Heading } from '@/presentation/components/Heading'
import { ProjectCard } from '@/presentation/components/ProjectCard'

const Projects = () => {
  return (
    <S.Wrapper>
      <Heading
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
          Projetos
      </Heading>
      <S.Subtitle
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        Aqui estão alguns projetos que fiz ao longo de minha trajetória, espero que goste!
      </S.Subtitle>
      <S.ProjectsWrapper>
        <ProjectCard
          title='georgekaran.com'
          tags={['React', 'Next.JS', 'Styled-Components']}
          image='/img/projects/georgekaran-card.png'
          description='George Karan personal page where you can find some of my projects and updates about me.'
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Won Games'
          tags={['React', 'Strapi', 'Typescript']}
          image='/img/projects/won-games-card.png'
          description='Ecommerce project for selling games using Strapi, React and Styled-Components.'
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Ticketing'
          tags={['React', 'NodeJS', 'NATS']}
          image='/img/projects/ticketing-card.png'
          description='Buy and sell tickets in this microservices based project.'
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Survey App'
          tags={['React', 'NodeJS', 'Typescript']}
          image='/img/projects/survey-card.png'
          description='Survey project written in React and Typescript using TDD.'
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Ecoleta'
          tags={['React', 'NodeJS', 'Native']}
          image='/img/projects/ecoleta-card.png'
          description='Market place for waste collection written in React, React-Native and Node.JS.'
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Star Wars UI'
          tags={['React', 'NodeJS', 'Typescript']}
          image='/img/projects/star-wars-card.png'
          description='Star Wars UI landing page consuming data from https://swapi.co.'
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
      </S.ProjectsWrapper>
    </S.Wrapper>
  )
}

export default Projects
