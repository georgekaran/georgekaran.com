import React from 'react'
import { RenderResult, screen, fireEvent, waitFor } from '@testing-library/react'
import 'jest-localstorage-mock'

import { Menu } from '.'
import { render } from '@/test/helpers'
import theme from '@/presentation/styles/theme'
import { NextRouterStub } from '@/test/RouterContextMock'
import { LanguageResource } from '@/domain/models/language'

const testMenuLink = async (name: string, pushSpy: jest.SpyInstance<Promise<boolean>, [url: string]>): Promise<void> => {
  let link = screen.getByTestId(`${name}-link`)
  fireEvent.click(link)
  expect(pushSpy).toHaveBeenCalledWith(`/${name === 'home' ? '' : name}`)
  link = await waitFor(() => screen.getByTestId(`${name}-link`))
  expect(link).toHaveStyleRule(
    'background',
    theme.colors.green,
    {
      modifier: '::before'
    }
  )
}

type SutTypes = {
  sut: RenderResult
  nextRouterStub: NextRouterStub
}

const makeSut = (nextRouterStub = new NextRouterStub()): SutTypes => {
  const sut = render(
    <Menu />,
    nextRouterStub
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
    expect(screen.getAllByLabelText('Idioma')).toHaveLength(2)
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
    const pushSpy = jest.spyOn(nextRouterStub, 'push')
    makeSut(nextRouterStub)
    // Projects
    await testMenuLink('projects', pushSpy)
    // Home
    await testMenuLink('home', pushSpy)
    // Contact
    await testMenuLink('contact', pushSpy)
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
    expect(screen.queryAllByLabelText(/language/i)).toHaveLength(0) // ensure default language isn't en_US
    let select = screen.getAllByLabelText(/idioma/i)[0] as HTMLSelectElement
    fireEvent.change(select, {
      target: {
        value: LanguageResource.en
      }
    })
    let projectsLink = await waitFor(() => screen.getByTestId('projects-link'))
    select = await waitFor(() => screen.getAllByLabelText(/language/i)[0]) as HTMLSelectElement
    expect(projectsLink).toHaveTextContent('Projects')
    expect(select).toHaveProperty('value', LanguageResource.en)

    fireEvent.change(select, {
      target: {
        value: LanguageResource.es
      }
    })
    projectsLink = await waitFor(() => screen.getByTestId('projects-link'))
    select = await waitFor(() => screen.getAllByLabelText(/idioma/i)[0]) as HTMLSelectElement
    expect(projectsLink).toHaveTextContent('Proyectos')
    expect(select).toHaveProperty('value', LanguageResource.es)
  })

  test('should match snapshot', () => {
    const { sut } = makeSut()
    expect(sut.container.firstChild).toMatchSnapshot()
  })
})
