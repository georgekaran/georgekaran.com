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
} & Partial<UseStarsProps>

type SutTypes = {
  sut: RenderHookResult<any, any>
}

const makeSut = ({
  ref = { current: createWrapper() },
  stars = 5,
  wrapperDelimiter = ref
}: SutProps = {}): SutTypes => {
  // @ts-ignore
  useRef.mockReturnValue(ref)
  const sut = renderHook(() => useStars({ stars, wrapperDelimiter }))
  return {
    sut
  }
}

describe('useStars', () => {
  it('should return 5 Stars', () => {
    const { sut } = makeSut()
    expect(sut.result.current.length).toBe(5)
  })

  it('should return 0 stars if wrapper is invalid', () => {
    const mRef = { current: null }
    const { sut } = makeSut({ ref: mRef })
    expect(sut.result.current.length).toBe(0)
  })

  it('should return 0 stars if stars prop is negative', () => {
    const { sut } = makeSut({ stars: -1 })
    expect(sut.result.current.length).toBe(0)
  })
})
