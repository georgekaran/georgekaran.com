import { useEffect, useLayoutEffect } from 'react'
import { renderHook } from '@testing-library/react-hooks'

import useIsoMorphicLayoutEffect from './useIsoMorphicLayoutEffect'

describe('useIsoMorphicLayoutEffect', () => {
  it('should return useEffect if typeof window is undefined', () => {
    // @ts-ignore
    const { result } = renderHook(() => useIsoMorphicLayoutEffect(undefined))
    expect(result.current).toEqual(useEffect)
  })

  it('should return useEffect if typeof window is undefined', () => {
    const { result } = renderHook(() => useIsoMorphicLayoutEffect(global.window))
    expect(result.current).toEqual(useLayoutEffect)
  })
})
