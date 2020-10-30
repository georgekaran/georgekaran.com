import React from 'react'
import { screen } from '@testing-library/react'

import { Footer } from '.'
import { render } from '@/test/helpers'

describe('<Footer />', () => {
  it('should render with initial state', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/george karan/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })
})
