import React from 'react'

import { Select } from '.'
import { render } from '@/test/helpers'
import { fireEvent, RenderResult, screen } from '@testing-library/react'
import { SelectProps } from './Select'

const mockActiveElement = (value: any) => {
  Object.defineProperties(document, {
    activeElement: {
      value,
      writable: false
    }
  })
}

type SutTypes = {
  sut: RenderResult
  onChangeMock: jest.Mock<any, any>
}

type SutProps = Pick<SelectProps, 'initialValue' | 'ariaLabel'>

const makeSut = ({ initialValue, ariaLabel }: SutProps = {}): SutTypes => {
  const onChangeMock = jest.fn()
  const sut = render(
    <Select
      ariaLabel={ariaLabel}
      initialValue={initialValue}
      options={['PT-BR', 'EN-US', 'ES-ES']}
      onChange={onChangeMock}
    />
  )
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

  it('should set initial valeu correctly', () => {
    makeSut({ initialValue: 'ES-ES' })
    expect(screen.getByTestId('select')).toHaveProperty('value', 'ES-ES')
  })

  it('should call onChange when value change', () => {
    const { onChangeMock } = makeSut()
    const select = screen.getByTestId('select') as HTMLSelectElement
    fireEvent.change(select, {
      target: {
        value: 'EN-US'
      }
    })
    expect(onChangeMock).toHaveBeenCalled()
    expect(screen.getByTestId('select')).toHaveProperty('value', 'EN-US')
  })

  it('should have property aria-label if ariaLabel is provided', () => {
    makeSut({ ariaLabel: 'any_label' })
    expect(screen.getByLabelText('any_label')).toBeInTheDocument()
  })

  it('should not call document.activeElement.blur if document.activeElement is not a HTMLElement', () => {
    mockActiveElement(null)
    makeSut()
    const select = screen.getByTestId('select') as HTMLSelectElement
    fireEvent.change(select, {
      target: {
        value: 'EN-US'
      }
    })
    expect(select).not.toHaveFocus()
  })
})
