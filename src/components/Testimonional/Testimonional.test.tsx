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

    const author = screen.getByRole('heading', { name: /any_author/ })
    expect(author).toBeInTheDocument()
    expect(author).toHaveStyleRule(
      'font-size', '1.4rem', { media: '(max-width: 768px)' }
    )

    const job = screen.getByText(/any_job/)
    expect(job).toBeInTheDocument()
    expect(job).toHaveStyleRule(
      'font-size', '12px', { media: '(max-width: 768px)' }
    )

    const company = screen.getByText(/any_company/)
    expect(company).toBeInTheDocument()
    expect(company).toHaveStyleRule(
      'font-size', '12px', { media: '(max-width: 768px)' }
    )

    const authorImage = screen.getByRole('img')
    expect(authorImage).toHaveAttribute('src', '/any_image.png')
    expect(authorImage.parentElement).toHaveStyleRule(
      'width', '4.2rem', { media: '(max-width: 768px)' }
    )
    expect(authorImage.parentElement).toHaveStyleRule(
      'height', '4.2rem', { media: '(max-width: 768px)' }
    )

    const testimonial = screen.getByText('any_testimonial')
    expect(testimonial).toBeInTheDocument()
    expect(testimonial).toHaveStyleRule(
      'padding', '0', { media: '(max-width: 768px)' }
    )
    expect(testimonial).toHaveStyleRule(
      'font-size', '1.4rem', { media: '(max-width: 768px)' }
    )
    expect(testimonial).toHaveStyleRule(
      'flex', '0.9', { media: '(max-width: 768px)' }
    )
  })
})
