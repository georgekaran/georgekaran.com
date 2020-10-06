import React from 'react'

import { Testimonional } from '.'
import { renderWithTheme } from '@/test/helpers'
import { screen } from '@testing-library/react'

describe('<Testimonional />', () => {
  it('should render with initial state', () => {
    renderWithTheme(
      <Testimonional
        testimonial="any_testimonial"
        author="any_author"
        authorImage="/any_image.png"
        job="any_job"
        company="any_company"
      />
    )

    expect(screen.getByRole('heading', { name: /any_author/ })).toBeInTheDocument()
    expect(screen.getByText(/any_job/)).toBeInTheDocument()
    expect(screen.getByText(/any_company/)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/any_image.png')
    expect(screen.getByText('any_testimonial')).toBeInTheDocument()
  })
})
