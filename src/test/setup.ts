import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'jest-localstorage-mock'

process.env = {
  ...process.env,
  // @ts-ignore
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['miro.medium.com'],
    path: '/_next/image',
    loader: 'default'
  }
}

// Error: Not implemented: window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true })
