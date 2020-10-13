import { GeneratorFunction } from 'styled-media-query'

declare module 'styled-media-query' {
  export interface DefaultBreakpoints {
    huge: string
    large: string
    medium: string
    small: string
    [key: string]: string
  }
  export interface MediaGenerator<Breakpoints, Theme> {
    lessThan: <Props>(
      breakpoint: keyof Breakpoints | string
    ) => GeneratorFunction<Props, Theme>
    greaterThan: <Props>(
      breakpoint: keyof Breakpoints | string
    ) => GeneratorFunction<Props, Theme>
    between: <Props>(
      fist: keyof Breakpoints | string,
      second: keyof Breakpoints | string
    ) => GeneratorFunction<Props, Theme>
  }
}
