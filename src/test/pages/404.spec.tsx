import React from 'react'
import { screen, RenderResult, fireEvent } from '@testing-library/react'

import { render } from '@/test/helpers'
import NotFound from '@/pages/404'
import theme from '@/presentation/styles/theme'
import { NextRouterStub } from '@/test/RouterContextMock'

type SutTypes = {
  sut: RenderResult
  nextRouterStub: NextRouterStub
}

const makeSut = (nextRouterStub = new NextRouterStub()): SutTypes => {
  const sut = render(
    <NotFound />,
    nextRouterStub
  )
  return {
    sut,
    nextRouterStub
  }
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
    expect(screen.getByText(/voltar para home/i)).toBeInTheDocument()
  })

  it('should go to home page on button click', () => {
    const nextRouterStub = new NextRouterStub()
    const pushSpy = jest.spyOn(nextRouterStub, 'push')
    makeSut(nextRouterStub)

    const anchorHome = screen.getByText(/voltar para home/i).parentElement
    fireEvent.click(anchorHome!)
    expect(pushSpy).toHaveBeenCalledWith('/')
  })
})
