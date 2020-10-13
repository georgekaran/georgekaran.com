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
})
