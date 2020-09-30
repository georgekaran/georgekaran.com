import React from 'react'

import { Technology } from '.'
import { renderWithTheme } from '@/test/helpers'
import { screen } from '@testing-library/react'

describe('<Technology />', () => {
  it('should render with initial state', () => {
    renderWithTheme(<Technology image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt="React logo (Atom)" />)
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'React logo (Atom)')
  })
})
