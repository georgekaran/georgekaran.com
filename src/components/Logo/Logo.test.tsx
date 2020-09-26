import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from './Logo'

describe('<Logo />', () => {
  it('should render', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/george mueller/i)).toBeInTheDocument()
  })
})
