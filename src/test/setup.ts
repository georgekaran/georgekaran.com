import '@testing-library/jest-dom'
import 'jest-styled-components'

// Error: Not implemented: window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true })
