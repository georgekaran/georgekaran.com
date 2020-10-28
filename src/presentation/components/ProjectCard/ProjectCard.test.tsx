import React from 'react'

import { ProjectCard } from '.'
import { render } from '@/test/helpers'
import { screen } from '@testing-library/react'

describe('<ProjectCard />', () => {
  it('should render with initial state', () => {
    render(<ProjectCard title="any_title" tags={['any_tag', 'any_tag2']} description="any_description" image="/img/projects/georgekaran-card.png" githubUrl="any_github_url" />)
    expect(screen.getByRole('heading', { name: /any_title/i })).toBeInTheDocument()
    expect(screen.getByText('any_tag')).toBeInTheDocument()
    expect(screen.getByText('any_tag2')).toBeInTheDocument()
    expect(screen.getByText('any_description')).toBeInTheDocument()
    // FIX
    // expect(screen.getByRole('img')).toHaveAttribute('src', '/img/projects/georgekaran-card.png')
  })
})
