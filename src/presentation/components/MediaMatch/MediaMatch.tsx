import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

export type DisplayType = 'block' | 'flex' | 'none'

export type MediaMatchProps = {
  lessThan?: Breakpoint
  greaterThan?: Breakpoint
  display?: DisplayType
}

const mediaMatchModifiers = {
  lessThan: (size: Breakpoint, display: DisplayType) => css`
    ${media.lessThan(size)`
      display: ${display};
    `}
  `,
  greaterThan: (size: Breakpoint, display: DisplayType) => css`
    ${media.greaterThan(size)`
      display: ${display};
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan, display = 'block' }) => css`
    display: none;

    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan, display)}
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan, display)}
  `}
`
