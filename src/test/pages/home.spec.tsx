import '@/test/mock-match-media'
import React from 'react'
import { RenderResult, screen } from '@testing-library/react'

import { render } from '@/test/helpers'
import Home from '@/pages/index'
import messages from '@/main/config/messages'

const message = messages.pt

const makeSut = (): RenderResult => {
  return render(
    <Home />
  )
}

describe('Home Page', () => {
  it('should render with correct data', () => {
    makeSut()
    // Headins an titles
    expect(screen.getByText(message.fullstack)).toBeInTheDocument()
    expect(screen.getByText(message.presentation)).toBeInTheDocument()
    expect(screen.getByText(message.presentation_description)).toBeInTheDocument()
    expect(screen.getByText(message.about_me)).toBeInTheDocument()
    expect(screen.getByText(message.my_stack)).toBeInTheDocument()
    expect(screen.getByText(message.testimonials)).toBeInTheDocument()

    // Achievemnts
    expect(screen.getByText(message.course_react_solid_description)).toBeInTheDocument()
    expect(screen.getByText(message.job_dbc_company_description)).toBeInTheDocument()
    expect(screen.getByText(message.course_node_solid_description)).toBeInTheDocument()
    expect(screen.getByText(message.course_microservices_node_description)).toBeInTheDocument()
    expect(screen.getByText(message.course_go_description)).toBeInTheDocument()
    expect(screen.getByText(message.talk_javascript_microservices_description)).toBeInTheDocument()
    expect(screen.getByText(message.event_tdc_poa_2019_description)).toBeInTheDocument()
    expect(screen.getByText(message.talk_docker_description)).toBeInTheDocument()
    expect(screen.getByText(message.course_docker_description)).toBeInTheDocument()
    expect(screen.getByText(message.event_tdc_floripa_2019_description)).toBeInTheDocument()
    expect(screen.getByText(message.education_sprachcaffe_description)).toBeInTheDocument()
    expect(screen.getByText(message.job_bimachine_description)).toBeInTheDocument()
    expect(screen.getByText(message.job_cantustange_description)).toBeInTheDocument()

    // Stack
    expect(screen.getByAltText(/react/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Node JS/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Golang/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Java/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Typescript/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Mongo DB/i)).toBeInTheDocument()
    expect(screen.getByAltText(/AWS/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Docker/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Postgres SQL/i)).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
  })
})
