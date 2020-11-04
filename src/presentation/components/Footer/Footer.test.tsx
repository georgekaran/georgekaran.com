import React from 'react'
import { screen } from '@testing-library/react'

import { Footer } from '.'
import { render } from '@/test/helpers'

describe('<Footer />', () => {
  it('should render with initial state', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/george karan/i)).toBeInTheDocument()
    const email = screen.getByRole('link', { name: /email/i })
    expect(email).toBeInTheDocument()
    expect(email).toHaveAttribute('href', 'mailto:georgekaran12@gmail.com')
    expect(email).toHaveAttribute('target', '__blank')
    const linkedin = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedin).toBeInTheDocument()
    expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/in/georgekaranmueller')
    expect(linkedin).toHaveAttribute('target', '__blank')
    const github = screen.getByRole('link', { name: /github/i })
    expect(github).toBeInTheDocument()
    expect(github).toHaveAttribute('href', 'https://github.com/georgekaran')
    expect(github).toHaveAttribute('target', '__blank')
  })
})
