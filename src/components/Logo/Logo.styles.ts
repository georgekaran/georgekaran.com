import styled, { css } from 'styled-components'

import { LogoProps } from '.'

type WrapperProps = LogoProps

export const Wrapper = styled.div<WrapperProps>`
  ${({ hideOnMobile }) => css`
    width: 13rem;
  `}
`
