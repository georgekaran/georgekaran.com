import React from 'react'

import * as S from '@/presentation/styles/pages/projects'
import * as Animations from '@/presentation/styles/animations'
import { Heading } from '@/presentation/components/Heading'
import { ProjectCard } from '@/presentation/components/ProjectCard'
import useI18N from '@/presentation/hooks/usei18n'

const Projects = () => {
  const i18n = useI18N()

  return (
    <S.Wrapper>
      <Heading
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        {i18n.t('projects')}
      </Heading>
      <S.Subtitle
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        {i18n.t('projects_description')}
      </S.Subtitle>
      <S.ProjectsWrapper>
        <ProjectCard
          title='georgekaran.com'
          tags={['React', 'Next.JS', 'Styled-Components']}
          image='/img/projects/georgekaran-card.png'
          description={i18n.t('project_personal_page')}
          githubUrl="https://github.com/georgekaran/georgekaran.com"
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Won Games'
          tags={['React', 'Strapi', 'Typescript']}
          image='/img/projects/won-games-card.png'
          description={i18n.t('project_won_games')}
          githubUrl="https://github.com/georgekaran/won-games-client"
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Ticketing'
          tags={['React', 'NodeJS', 'NATS']}
          image='/img/projects/ticketing-card.png'
          description={i18n.t('project_ticketing')}
          githubUrl="https://github.com/georgekaran/ticketing"
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Survey App'
          tags={['React', 'NodeJS', 'Typescript']}
          image='/img/projects/survey-card.png'
          description={i18n.t('project_survey')}
          githubUrl="https://github.com/georgekaran/survey-app"
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Ecoleta'
          tags={['React', 'NodeJS', 'Native']}
          image='/img/projects/ecoleta-card.png'
          description={i18n.t('project_ecoleta')}
          githubUrl="https://github.com/georgekaran/ecoleta"
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
        <ProjectCard
          title='Star Wars UI'
          tags={['React', 'NodeJS', 'Typescript']}
          image='/img/projects/star-wars-card.png'
          description={i18n.t('project_star_wars')}
          githubUrl="https://github.com/georgekaran/star-wars-ui"
          data-aos="fade-up"
          {...Animations.baseAosAnimation}
        />
      </S.ProjectsWrapper>
    </S.Wrapper>
  )
}

export default Projects
