import React from 'react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { RenderResult, screen, fireEvent, waitFor } from '@testing-library/react'
import { Router, NextRouter } from 'next/router'

import { Menu } from '.'
import { render } from '@/test/helpers'

type SutTypes = {
  sut: RenderResult
  router: jest.Mock
}

const makeSut = (): SutTypes => {
  const routerPushed = jest.fn()
  const mockedRouter: NextRouter = {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: (path: string) => {
      routerPushed(path)
      return new Promise((resolve) => resolve(true))
    },
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    },
    isFallback: false
  }
  // @ts-ignore
  Router.router = mockedRouter
  const sut = render(
    <RouterContext.Provider value={{ ...mockedRouter }}>
      <Menu />
    </RouterContext.Provider>
  )
  return {
    sut,
    router: routerPushed
  }
}

describe('<Menu />', () => {
  test('should render with initial state', () => {
    const { sut } = makeSut()
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/George Mueller/i)).toBeInTheDocument()
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

  test('shoud navigate to other pages', () => {
    const { router } = makeSut()
    // Projects
    const link = screen.getByTestId('projects-link')
    fireEvent.click(link)
    expect(router).toHaveBeenCalledWith('/projects')
    // Home
    const home = screen.getByTestId('home-link')
    fireEvent.click(home)
    expect(router).toHaveBeenCalledWith('/')
    // Home
    const contact = screen.getByTestId('contact-link')
    fireEvent.click(contact)
    expect(router).toHaveBeenCalledWith('/contact')
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

  test('should match snapshot', () => {
    const { sut } = makeSut()
    expect(sut.container.firstChild).toMatchSnapshot()
  })
})
