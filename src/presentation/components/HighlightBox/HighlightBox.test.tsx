import React from 'react'
import { screen } from '@testing-library/react'

import { HighlightBox } from '.'
import { render } from '@/test/utils/helpers'

describe('<HighlightBox />', () => {
  it('should render with initial state', () => {
    render(<HighlightBox primaryText="10" secondaryText="any_text" />)
    expect(screen.getByRole('heading', { name: /10/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /any_text/i })).toBeInTheDocument()

    const ellipse = screen.getByTestId('ellipse')
    expect(ellipse).toHaveStyle({
      backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'100\' ry=\'100\' stroke=\'%2328F5BEFF\' stroke-width=\'2\' stroke-dasharray=\'8\' stroke-dashoffset=\'71\' stroke-linecap=\'butt\'/%3e%3c/svg%3e")',
      borderRadius: '100px',
      width: '8rem',
      height: '8rem'
    })

    expect(ellipse).toHaveStyleRule(
      'background', 'linear-gradient(83.89deg,#28F5BE 2.81%,#3B37FF 97.94%)',
      { modifier: ':hover' }
    )
  })

  it('should match snapshot', () => {
    const { container } = render(<HighlightBox primaryText="10" secondaryText="any_text" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
