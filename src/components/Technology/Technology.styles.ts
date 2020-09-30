import styled, { css } from 'styled-components'
import { TechnologySize } from '.'

export const Wrapper = styled.div``

type ImageProps = {
  size: TechnologySize
}

const imageModifiers = {
  small: () => css`
    width: 4rem;
    height: 4rem;
  `
}

export const Image = styled.img<ImageProps>`
  ${({ size }) => css`
    object-fit: cover;

    ${!!size && imageModifiers[size]()};
  `}
`
