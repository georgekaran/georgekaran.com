import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect = (window: globalThis.Window) =>
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
