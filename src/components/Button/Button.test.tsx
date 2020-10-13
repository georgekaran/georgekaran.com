import React from 'react'
import { screen, RenderResult } from '@testing-library/react'

import { Button, ButtonProps } from '.'
import { renderWithTheme } from '@/test/helpers'
import theme from '@/styles/theme'

type SutProps = Omit<ButtonProps, 'children'>

const makeSut = ({ size = 'medium', fullWidth = false, icon = null, as = 'button', ...props }: SutProps = {}): RenderResult => {
  return renderWithTheme(<Button size={size} fullWidth={fullWidth} icon={icon} as={as} {...props}>Button</Button>)
}

describe('<Button />', () => {
  test('should render with correct initial state', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '4rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.small)
    expect(button).toHaveStyleRule('padding', `${theme.spacings.xxsmall} ${theme.spacings.medium}`)
  })

  test('should render small if small size is provided', () => {
    makeSut({ size: 'small' })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '3rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.small)
    expect(button).toHaveStyleRule('padding', theme.spacings.xxsmall)
  })

  test('should render large if large size is provided', () => {
    makeSut({ size: 'large' })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('height', '5rem')
    expect(button).toHaveStyleRule('font-size', theme.font.sizes.medium)
    expect(button).toHaveStyleRule('padding', `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`)
  })

  test('should render fullWidth if prop is provided', () => {
    makeSut({ fullWidth: true })
    const button = screen.getByRole('button', { name: /Button/ })
    expect(button).toHaveStyleRule('width', '100%')
  })
})
