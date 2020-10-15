import React from 'react'
import { Github as GithubIcon } from '@styled-icons/feather/Github'

import { ContactCard } from '.'
import { renderWithTheme } from '@/test/helpers'
import { screen } from '@testing-library/react'

describe('<ContactCard />', () => {
  it('should render with initial state', () => {
    renderWithTheme(
      <ContactCard
        icon={<GithubIcon aria-label="Github Icon" />}
        previewLink="georgekaran"
        fullLink="https://github.com/georgekaran"
      />
    )
    expect(screen.getByLabelText(/github icon/i)).toBeInTheDocument()
    expect(screen.getByText('georgekaran')).toBeInTheDocument()
    expect(screen.getByTestId('overlay')).toHaveAttribute('aria-hidden', 'true')
  })
})
