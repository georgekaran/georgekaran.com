import React, { HTMLAttributes } from 'react'

import * as S from './ProjectCard.styles'
import { Button } from '@/components/Button'

export type ProjectCardProps = {
  title: string
  tags: string[]
  image: string
  description: string
} & HTMLAttributes<HTMLDivElement>

const ProjectCard = ({ title, tags, description, image, ...props }: ProjectCardProps) => (
  <S.Wrapper {...props}>
    <S.HeaderWrapper>
      <S.Title>{title}</S.Title>
    </S.HeaderWrapper>
    <S.Image src={image} alt={title} />
    <S.TagWrapper>
      {tags.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)}
    </S.TagWrapper>
    <S.Description>
      {description}
    </S.Description>
    <S.FooterWrapper>
      <Button>
        Ver detalhes
      </Button>
    </S.FooterWrapper>
  </S.Wrapper>
)

export default ProjectCard
