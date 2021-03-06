import React from 'react'
import { screen, RenderResult } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button, ButtonProps, ButtonTypes } from '.'
import { render } from '@/test/utils/helpers'
import theme from '@/presentation/styles/theme'

type SutProps = Omit<ButtonProps, 'children'> & ButtonTypes

const makeSut = ({ size = 'medium', fullWidth = false, icon = null, as = 'button', ...props }: SutProps = {}): RenderResult => {
  return render(<Button size={size} fullWidth={fullWidth} icon={icon} as={as} {...props}>Button</Button>)
}

describe('<Button />', () => {
  test('should render with correct initial state', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyle({
      height: '4rem',
      fontSize: theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })
  })

  test('should render small if small size is provided', () => {
    makeSut({ size: 'small' })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyle({
      height: '3rem',
      fontSize: theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall}`
    })
  })

  test('should render large if large size is provided', () => {
    makeSut({ size: 'large' })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyle({
      height: '5rem',
      fontSize: theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    })
  })

  test('should render fullWidth if prop is provided', () => {
    makeSut({ fullWidth: true })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  test('should render icon if an icon is provided', () => {
    makeSut({ icon: <AddShoppingCart data-testid="icon" /> })
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    expect(screen.getByText(/Button/)).toBeInTheDocument()
  })

  test('should render as anchor if prop \'as\' is a', () => {
    makeSut({ as: 'a', href: '/link' })
    const buttonAsLink = screen.getByRole('link', { name: /Button/i })
    expect(buttonAsLink).toBeInTheDocument()
  })
})
