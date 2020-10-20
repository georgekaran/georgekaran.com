import React from 'react'

import { Testimonional } from '.'
import { render } from '@/test/helpers'
import { screen } from '@testing-library/react'

const elementsExists = (textContent: string): HTMLElement => {
  const el = screen.getByText(textContent)
  expect(el).toBeInTheDocument()
  return el
}

describe('<Testimonional />', () => {
  it('should render with initial state', () => {
    render(
      <Testimonional
        testimonial="any_testimonial"
        author="any_author"
        authorImage="/any_image.png"
        job="any_job"
        company="any_company"
      />
    )

    expect(elementsExists('any_author')).toHaveStyleRule(
      'font-size', '1.4rem', { media: '(max-width: 768px)' }
    )

    const job = elementsExists('any_job')
    expect(job).toHaveStyleRule(
      'font-size', '12px', { media: '(max-width: 768px)' }
    )

    const company = elementsExists('any_company')
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

    const testimonial = elementsExists('any_testimonial')
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
