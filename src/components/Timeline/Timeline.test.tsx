import React from 'react'
import { screen } from '@testing-library/react'

import { Timeline, Achievement } from '.'
import { renderWithTheme } from '@/test/helpers'

const achievements = (): Achievement[] => ([
  {
    date: new Date('2020-08-21T00:00:00'),
    title: 'Node JS com microservicos 1',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'education'
  },
  {
    date: new Date('2019-08-21T00:00:00'),
    title: 'Node JS com microservicos 2',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'event'
  },
  {
    date: new Date('2019-08-22T00:00:00'),
    title: 'Node JS com microservicos 3',
    description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
    tag: 'professional'
  }
])

describe('<Timeline />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<Timeline achievements={achievements()} />)
    expect(screen.getByText('2020')).toBeInTheDocument()
    expect(screen.getByText('2019')).toBeInTheDocument()

    expect(screen.getByTestId('events-2020').childElementCount).toBe(1)
    expect(screen.getByTestId('events-2019').childElementCount).toBe(2)

    expect(screen.queryByText('Role para mais eventos')).not.toBeInTheDocument()
  })

  it('should render if empty achievements is provided', () => {
    renderWithTheme(<Timeline achievements={[]} />)
    expect(screen.queryByText('2020')).not.toBeInTheDocument()
    expect(screen.queryByText('2019')).not.toBeInTheDocument()

    expect(screen.queryByText('Role para mais eventos')).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Timeline achievements={[]} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
