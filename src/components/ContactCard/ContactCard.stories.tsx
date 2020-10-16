import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Github as GithubIcon } from '@styled-icons/feather/Github'

import { ContactCard, ContactCardProps } from '.'

export default {
  title: 'ContactCard',
  component: ContactCard,
  args: {
    icon: <GithubIcon aria-label="Github Icon" />,
    previewLink: 'georgekaran',
    fullLink: 'https://github.com/georgekaran',
    socialMedia: 'Github'
  }
} as Meta

export const Default: Story<ContactCardProps> = (args) => <ContactCard {...args} />
