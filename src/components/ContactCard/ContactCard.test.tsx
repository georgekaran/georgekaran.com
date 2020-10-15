import React from 'react'
import { Github as GithubIcon } from '@styled-icons/feather/Github'

import { ContactCard } from '.'
import { renderWithTheme } from '@/test/helpers'
import { RenderResult, screen } from '@testing-library/react'

const makeSut = (): RenderResult => {
  return renderWithTheme(
    <ContactCard
      icon={<GithubIcon aria-label="Github Icon" />}
      previewLink="georgekaran"
      fullLink="https://github.com/georgekaran"
    />
  )
}

describe('<ContactCard />', () => {
  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByLabelText(/github icon/i)).toBeInTheDocument()
    expect(screen.getByText('georgekaran')).toBeInTheDocument()
    expect(screen.getByTestId('overlay')).toHaveAttribute('aria-hidden', 'true')
  })
})
