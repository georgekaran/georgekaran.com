import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'jest-localstorage-mock'

// Error: Not implemented: window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true })
