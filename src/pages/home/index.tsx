import React from 'react'

import * as S from './styles'
import { HighlightBox } from '@/components/HighlightBox'
import { Heading } from '@/components/Heading'

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
      </S.AboutMe>
    </S.Wrapper>
  )
}

export default Home
