import React, { HTMLAttributes } from 'react'
import NextImage from 'next/image'
import { Github } from '@styled-icons/feather/Github'

import * as S from './ProjectCard.styles'
import { Button } from '@/presentation/components/Button'
import useI18N from '@/presentation/hooks/usei18n'

export type ProjectCardProps = {
  title: string
  tags: string[]
  image: string
  description: string
  githubUrl: string
} & HTMLAttributes<HTMLDivElement>

const ProjectCard = ({ title, tags, description, image, githubUrl, ...props }: ProjectCardProps) => {
  const i18n = useI18N()
  return (
    <S.Wrapper {...props}>
      <S.HeaderWrapper>
        <S.Title>{title}</S.Title>
      </S.HeaderWrapper>
      <S.ImageWrapper>
        <NextImage
          src={image}
          alt={title}
          height={380}
          width={500}
        />
      </S.ImageWrapper>

      <S.TagWrapper>
        {tags.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)}
      </S.TagWrapper>
      <S.Description>
        {description}
      </S.Description>
      <S.FooterWrapper>
        <Button
          aria-label={i18n.t('open_github_project', [title])}
          icon={<Github />}
          as="a"
          href={githubUrl}
          target="__blank"
        >
          Github
        </Button>
      </S.FooterWrapper>
    </S.Wrapper>
  )
}

export default ProjectCard
