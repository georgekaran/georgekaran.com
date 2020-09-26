import React from 'react'
import { RenderResult, screen, fireEvent } from '@testing-library/react'

import { Menu } from '.'
import { renderWithTheme } from '@/test/helpers'

const makeSut = (): RenderResult => {
  return renderWithTheme(<Menu />)
}

describe('<Menu />', () => {
  test('should render with initial state', () => {
    makeSut()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/George Mueller/i)).toBeInTheDocument()
  })

  test('shoud open mobile menu', () => {
    makeSut()
    const menuIcon = screen.getByLabelText(/open menu/i)
    fireEvent.click(menuIcon)

    const menuFull = screen.getByRole('navigation')

    expect(menuFull).toHaveStyle({
      opacity: '1',
      pointerEvents: 'all'
    })
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument()
  })

  test('shoud close mobile menu', () => {
    makeSut()
    const menuIcon = screen.getByLabelText(/open menu/i)
    fireEvent.click(menuIcon)
    const closeIcon = screen.getByLabelText(/close menu/i)
    fireEvent.click(closeIcon)

    const menuFull = screen.getByRole('navigation', { hidden: true })

    expect(menuFull).toHaveStyle({
      opacity: '0',
      pointerEvents: 'none'
    })
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  test('should match snapshot', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
  })
})
