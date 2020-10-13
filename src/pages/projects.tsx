import React from 'react'

import * as S from '@/styles/pages/projects'
import * as Animations from '@/styles/animations'
import { Heading } from '@/components/Heading'

const Projects = () => {
  return (
    <S.Wrapper>
      <Heading
        data-aos="slide-right"
        data-aos-offset="10"
        {...Animations.baseAosAnimation}
        data-aos-duration="1000"
      >
          Projetos
      </Heading>
      <S.ProjectsWrapper>
        TODO
      </S.ProjectsWrapper>
    </S.Wrapper>
  )
}

export default Projects
