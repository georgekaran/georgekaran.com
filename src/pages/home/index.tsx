import React from 'react'

import * as S from './styles'

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

      <S.MediaGroup>
        <S.Photo src="/img/personal-photo.png" alt="George photo facing the camera"/>
      </S.MediaGroup>
    </S.Wrapper>
  )
}

export default Home
