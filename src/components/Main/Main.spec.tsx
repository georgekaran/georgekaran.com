import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'

import Main from './Main'

const makeSut = (): RenderResult => {
  return render(<Main />)
}

describe('Main component', () => {
  test('Should render with no error', () => {
    makeSut()
    expect(screen.getByTestId('title')).toHaveTextContent('Next-Boilerplate')
  })

  test('Should match snapshot', () => {
    const { container } = makeSut()
    expect(container.firstChild).toMatchSnapshot()
  })
})
