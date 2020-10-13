import React from 'react'
import * as S from './ProjectCard.styles'

export type ProjectCardProps = {
  title: string
  tags: string[]
  image: string
  description: string
}

const ProjectCard = ({ title, tags, description, image }: ProjectCardProps) => (
  <S.Wrapper>
    <S.HeaderWrapper>
      <S.Title>{title}</S.Title>
      <S.TagWrapper>
        {tags.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)}
      </S.TagWrapper>
    </S.HeaderWrapper>
    <S.Image src={image} alt={title} />
    <S.Description>
      {description}
    </S.Description>
    <S.FooterWrapper>
      <S.Button>
        Ver detalhes
      </S.Button>
    </S.FooterWrapper>
  </S.Wrapper>
)

export default ProjectCard
