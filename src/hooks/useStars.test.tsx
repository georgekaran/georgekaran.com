import { useRef } from 'react'
import { renderHook } from '@testing-library/react-hooks'

import useStars from './useStars'

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

describe('useStars', () => {
  it('should return 5 Stars', () => {
    const mRef = { current: createWrapper() }
    // @ts-ignore
    useRef.mockReturnValueOnce(mRef)
    const { result } = renderHook(() => useStars({ stars: 5, wrapperDelimiter: mRef }))
    expect(result.current.length).toBe(5)
  })
})
