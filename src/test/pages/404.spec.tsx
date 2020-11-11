import React from 'react'
import { screen } from '@testing-library/react'

import { render } from '@/test/helpers'
import NotFound from '@/pages/404'
import theme from '@/presentation/styles/theme'

const makeSut = () => {
  render(<NotFound />)
}

describe('404 Page', () => {
  it('should render 404 with correct data', () => {
    makeSut()
    expect(screen.getByText('404!')).toHaveStyle({
      color: theme.colors.green,
      fontSize: 'min(10rem, 20vw)'
    })
    expect(screen.getByText(/Opss, parece que a página/i)).toHaveStyle({
      color: theme.colors.white,
      fontSize: 'min(10rem, white)',
      fontWeight: theme.font.medium,
      marginBottom: theme.spacings.large,
      textAlign: 'justify'
    })
    expect(screen.getByText(/voltar ao home/i).parentElement).toHaveAttribute('href', '/')
  })
})
