import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Timeline, TimelineProps } from '.'

export default {
  title: 'Timeline',
  component: Timeline
} as Meta

export const Default: Story<TimelineProps> = (args) => (
  <div>
    <Timeline {...args} />
  </div>
)

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}

Default.args = {
  achievements: [
    {
      date: new Date('2020-08-21T00:00:00'),
      title: 'Node JS com microservicos',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'education'
    },
    {
      date: new Date('2019-08-21T00:00:00'),
      title: 'Node JS com microservicos',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'event'
    },
    {
      date: new Date('2019-08-22T00:00:00'),
      title: 'Node JS com microservicos',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'professional'
    },
    {
      date: new Date('2018-08-21T00:00:00'),
      title: 'Node JS com microservicos',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'event'
    },
    {
      date: new Date('2018-08-21T00:00:00'),
      title: 'Node JS com microservicos',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'education'
    }
  ]
}
