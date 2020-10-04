import { useEffect, useLayoutEffect } from 'react'
import { renderHook, RenderHookResult } from '@testing-library/react-hooks'

import useIsoMorphicLayoutEffect from './useIsoMorphicLayoutEffect'

const makeSut = (window: globalThis.Window): RenderHookResult<any, any> => {
  return renderHook(() => useIsoMorphicLayoutEffect(window))
}

describe('useIsoMorphicLayoutEffect', () => {
  it('should return useEffect if typeof window is undefined', () => {
    // @ts-ignore
    const { result } = makeSut(undefined)
    expect(result.current).toEqual(useEffect)
  })

  it('should return useEffect if typeof window is undefined', () => {
    const { result } = makeSut(global.window)
    expect(result.current).toEqual(useLayoutEffect)
  })
})
