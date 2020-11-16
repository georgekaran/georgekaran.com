import React, { useRef, useEffect } from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { Timeline, Achievement } from '.'
import { render } from '@/test/utils/helpers'

const createAchievements = (): Achievement[] => {
  const arr: Achievement[] = [
    {
      date: new Date('2018-08-21T00:00:00'),
      title: 'Node JS com microservicos 0',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'professional'
    },
    {
      date: new Date('2019-08-21T00:00:00'),
      title: 'Node JS com microservicos 1',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'event'
    },
    {
      date: new Date('2020-08-21T00:00:00'),
      title: 'Node JS com microservicos 2',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'talk'
    },
    {
      date: new Date('2018-08-21T00:00:00'),
      title: 'Node JS com microservicos 3',
      description: 'Node JS com microservicos Node JS com microservicos Node JS com microservicosNode JS com microservicos Node JS com microservicos Node JS com microservicos Node JS com microservicos',
      tag: 'education'
    }
  ]
  return arr
}

type WrapperProps = {
  numberAchievements?: number
}

const Wrapper = ({ numberAchievements }: WrapperProps = { numberAchievements: 1 }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      Object.defineProperties(ref.current, {
        scrollHeight: {
          value: 700
        },
        clientHeight: {
          value: 700
        }
      })
    }
  }, [ref])

  return (
    <div ref={ref}>
      <Timeline achievements={numberAchievements === 0 ? [] : createAchievements()} />
    </div>
  )
}

type SutProps = WrapperProps

const makeSut = (props: SutProps): RenderResult => {
  return render(
    <Wrapper {...props} />
  )
}

describe('<Timeline />', () => {
  it('should render with initial state', () => {
    makeSut({})
    expect(screen.getByText('Node JS com microservicos 0')).toBeInTheDocument()
    expect(screen.getByText('Node JS com microservicos 1')).toBeInTheDocument()
    expect(screen.getByText('Node JS com microservicos 2')).toBeInTheDocument()
    expect(screen.getByText('Node JS com microservicos 3')).toBeInTheDocument()

    expect(screen.getByTestId('events-2020').childElementCount).toBe(1)
    expect(screen.getByTestId('events-2019').childElementCount).toBe(1)
    expect(screen.getByTestId('events-2018').childElementCount).toBe(2)
  })

  it('should render if empty achievements is provided', () => {
    makeSut({ numberAchievements: 0 })
    expect(screen.queryByText('2020')).not.toBeInTheDocument()
    expect(screen.queryByText('2019')).not.toBeInTheDocument()
    expect(screen.queryByText('2018')).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Timeline achievements={[]} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
