import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { render } from '@/test/helpers'
import ProjectsPage from '@/pages/projects'
import messages from '@/main/config/messages'

const message = messages.pt

const makeSut = (): RenderResult => {
  return render(
    <ProjectsPage />
  )
}

describe('Projects Page', () => {
  it('should render with correct data', () => {
    makeSut()
    expect(screen.getByText(message.projects)).toBeInTheDocument()
    expect(screen.getByText(message.projects_description)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /georgekaran.com/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Won Games/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ticketing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Survey App/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ecoleta/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Star Wars UI/i })).toBeInTheDocument()
  })
})
