import React from 'react'

import { Select } from '.'
import { render } from '@/test/helpers'
import { RenderResult, screen } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
  onChangeMock: jest.Mock<any, any>
}

const makeSut = (): SutTypes => {
  const onChangeMock = jest.fn()
  const sut = render(<Select options={['PT-BR', 'EN-US', 'ES-ES']} onChange={onChangeMock} />)
  return {
    sut,
    onChangeMock
  }
}

describe('<Select />', () => {
  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByTestId('select')).toHaveStyle({
      backgroundImage: "url(data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' height='24' fill='%2328F5BE' xmlns='http://www.w3.org/2000/svg'><path d='M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z'></path></svg>)"
    })
    expect(screen.getByRole('option', { name: /pt-br/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /en-us/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /es-es/i })).toBeInTheDocument()
  })
})
