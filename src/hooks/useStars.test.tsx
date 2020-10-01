import { useRef } from 'react'
import { renderHook, RenderHookResult } from '@testing-library/react-hooks'

import useStars, { UseStarsProps } from './useStars'

jest.mock('react', () => {
  const originReact = jest.requireActual('react')
  const mUseRef = jest.fn()
  return {
    ...originReact,
    useRef: mUseRef
  }
})

const createWrapper = (): HTMLDivElement => {
  const wrapper = document.createElement('div')
  wrapper.style.width = '50rem'
  wrapper.style.height = '50rem'
  return wrapper
}

type SutProps = {
  ref?: {
    current: any
  }
  sutProps?: UseStarsProps
}

type SutTypes = {
  sut: RenderHookResult<any, any>
}

const makeSut = ({
  ref = { current: createWrapper() },
  sutProps = {
    stars: 5,
    wrapperDelimiter: ref
  }
}: SutProps = {}): SutTypes => {
  // @ts-ignore
  useRef.mockReturnValue(ref)
  const sut = renderHook(() => useStars({ ...sutProps }))
  return {
    sut
  }
}

describe('useStars', () => {
  it('should return 5 Stars', () => {
    const { sut } = makeSut()
    expect(sut.result.current.length).toBe(5)
  })
})
