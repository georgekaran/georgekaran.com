import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Technology, TechnologyProps } from '.'

export default {
  title: 'Technology',
  component: Technology
} as Meta

export const Default: Story<TechnologyProps> = (args) => <Technology {...args} />

Default.args = {
  image: 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png',
  alt: 'React logo',
  size: 'small'
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
