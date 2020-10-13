import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    display: grid;
    grid-template-columns: 100%;
  `}
`

export const ProjectsWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    display: display;
    flex-wrap: wrap;
  `}
`
