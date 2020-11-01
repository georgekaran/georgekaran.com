import React from 'react'
import { RenderResult, screen, fireEvent, waitFor } from '@testing-library/react'

import { Menu } from '.'
import { render } from '@/test/helpers'
import theme from '@/presentation/styles/theme'
import { NextRouterStub, RouterContextMock } from '@/test/RouterContextMock'

type SutTypes = {
  sut: RenderResult
  nextRouterStub: NextRouterStub
}

const makeSut = (nextRouterStub = new NextRouterStub()): SutTypes => {
  const sut = render(
    <RouterContextMock nextRouter={nextRouterStub}>
      <Menu />
    </RouterContextMock>
  )
  return {
    sut,
    nextRouterStub
  }
}

describe('<Menu />', () => {
  test('should render with initial state', () => {
    const { sut } = makeSut()
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/George karan/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Idioma')).toBeInTheDocument()
    expect(sut.container.firstChild).toHaveStyle({
      padding: '2.4rem 3.2rem'
    })
    expect(sut.container.firstChild).toHaveStyleRule(
      'padding', '1.6rem',
      { media: '(max-width: 768px)' }
    )
  })

  test('shoud open mobile menu', () => {
    makeSut()
    const menuIcon = screen.getByLabelText(/abrir menu/i)
    fireEvent.click(menuIcon)

    const menuFull = screen.getByRole('navigation')

    expect(menuFull).toHaveStyle({
      opacity: '1',
      pointerEvents: 'all'
    })
    expect(screen.getByLabelText(/fechar menu/i)).toBeInTheDocument()
  })

  test('shoud close mobile menu', () => {
    makeSut()
    const menuIcon = screen.getByLabelText(/abrir menu/i)
    fireEvent.click(menuIcon)
    const closeIcon = screen.getByLabelText(/fechar menu/i)
    fireEvent.click(closeIcon)

    const menuFull = screen.getByRole('navigation', { hidden: true })

    expect(menuFull).toHaveStyle({
      opacity: '0',
      pointerEvents: 'none'
    })
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
  })

  test('shoud navigate to other pages', async () => {
    const nextRouterStub = new NextRouterStub()
    const pushPsy = jest.spyOn(nextRouterStub, 'push')
    makeSut(nextRouterStub)
    // Projects
    let link = screen.getByTestId('projects-link')
    fireEvent.click(link)
    expect(pushPsy).toHaveBeenCalledWith('/projects', '/projects', { locale: undefined, shallow: undefined })
    link = await waitFor(() => screen.getByTestId('projects-link'))
    expect(link).toHaveStyleRule(
      'background',
      theme.colors.green,
      {
        modifier: '::before'
      }
    )
    // Home
    const home = screen.getByTestId('home-link')
    fireEvent.click(home)
    expect(pushPsy).toHaveBeenCalledWith('/', '/', { locale: undefined, shallow: undefined })
    link = await waitFor(() => screen.getByTestId('home-link'))
    expect(link).toHaveStyleRule(
      'background',
      theme.colors.green,
      {
        modifier: '::before'
      }
    )
    // Home
    const contact = screen.getByTestId('contact-link')
    fireEvent.click(contact)
    expect(pushPsy).toHaveBeenCalledWith('/contact', '/contact', { locale: undefined, shallow: undefined })
    link = await waitFor(() => screen.getByTestId('contact-link'))
    expect(link).toHaveStyleRule(
      'background',
      theme.colors.green,
      {
        modifier: '::before'
      }
    )
  })

  test('shoud close MenuFull on MenuLink click', async () => {
    makeSut()
    // OPEN MENU MOBILE
    const openMenuIcon = screen.getByLabelText('Abrir menu')
    fireEvent.click(openMenuIcon)
    let nav = await waitFor(() => screen.getByTestId('menu-full'))
    expect(nav).toHaveAttribute('aria-hidden', 'false')

    const link = screen.getByTestId('home-link-mobile')
    fireEvent.click(link)
    nav = await waitFor(() => screen.getByTestId('menu-full'))
    expect(nav).toHaveAttribute('aria-hidden', 'true')
  })

  test('shoud change language on language select change', async () => {
    makeSut()
    expect(screen.queryByLabelText(/language/i)).not.toBeInTheDocument() // ensure default language isn't en_US
    const select = screen.getByLabelText(/idioma/i) as HTMLSelectElement
    fireEvent.change(select, {
      target: {
        value: 'en_US'
      }
    })
    await waitFor(() => screen.getByLabelText(/language/i))
  })

  test('should match snapshot', () => {
    const { sut } = makeSut()
    expect(sut.container.firstChild).toMatchSnapshot()
  })
})
