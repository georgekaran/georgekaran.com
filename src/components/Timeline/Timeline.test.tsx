import React from 'react'
import { screen } from '@testing-library/react'

import { Timeline, Achievement } from '.'
import { renderWithTheme } from '@/test/helpers'

const createAchievements = (length: number): Achievement[] => {
  let year = 2018
  const arr: Achievement[] = []
  for (let i = 0; i < length; i++) {
    arr.push(
      {
        date: new Date(`${year}-08-21T00:00:00`),
        title: `Node JS com microservicos ${i}`,
        description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
        tag: 'education'
      }
    )
    year = year + 1 > 2020 ? 2018 : year + 1
  }
  return arr
}

describe('<Timeline />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<Timeline achievements={createAchievements(3)} />)
    expect(screen.getByText('Node JS com microservicos 0')).toBeInTheDocument()
    expect(screen.getByText('Node JS com microservicos 1')).toBeInTheDocument()
    expect(screen.getByText('Node JS com microservicos 2')).toBeInTheDocument()

    expect(screen.getByTestId('events-2020').childElementCount).toBe(1)
    expect(screen.getByTestId('events-2019').childElementCount).toBe(1)
    expect(screen.getByTestId('events-2018').childElementCount).toBe(1)

    expect(screen.queryByText('Role para mais eventos')).not.toBeInTheDocument()
  })

  it('should render if empty achievements is provided', () => {
    renderWithTheme(<Timeline achievements={[]} />)
    expect(screen.queryByText('2020')).not.toBeInTheDocument()
    expect(screen.queryByText('2019')).not.toBeInTheDocument()
    expect(screen.queryByText('2018')).not.toBeInTheDocument()

    expect(screen.queryByText('Role para mais eventos')).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Timeline achievements={[]} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
