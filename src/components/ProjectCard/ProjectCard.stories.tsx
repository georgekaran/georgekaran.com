import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ProjectCard, ProjectCardProps } from '.'

export default {
  title: 'ProjectCard',
  component: ProjectCard
} as Meta

export const Default: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />

Default.args = {
  title: 'Amazing Project',
  tags: ['React', 'NodeJS', 'Express'],
  image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b689da70458237.5ba3e26628086.png',
  description: 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum...'
}
