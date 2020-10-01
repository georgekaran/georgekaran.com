import React from 'react'
import { screen } from '@testing-library/react'

import { Space } from '.'
import { renderWithTheme } from '@/test/helpers'

describe('<Space />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<Space />)
    expect(screen.getByTestId('fog-1')).toBeInTheDocument()
    expect(screen.getByTestId('fog-2')).toBeInTheDocument()
  })
})
