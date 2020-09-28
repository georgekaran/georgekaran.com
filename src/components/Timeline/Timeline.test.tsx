import React from 'react'

import { Timeline, Achievement } from '.'
import { renderWithTheme } from '@/test/helpers'

const achievements: Achievement[] = [
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

describe('<Timeline />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<Timeline achievements={achievements} />)
  })
})
