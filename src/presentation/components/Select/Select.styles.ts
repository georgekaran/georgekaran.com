import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
`

export const Select = styled.select`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' height='24' fill='%2328F5BE' xmlns='http://www.w3.org/2000/svg'><path d='M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z'></path></svg>");
    background-repeat: no-repeat;
    background-position-x: calc(100% - 1rem);
    background-position-y: 6px;
    border-radius: 6px;
    width: 100%;
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.white};

    &:focus {
      background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' height='24' fill='%2328F5BE' xmlns='http://www.w3.org/2000/svg'><path d='M18.2 13.3L12 7l-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z'></path></svg>");
    }
  `}
`

export const Option = styled.option`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`

export const IconWrapper = styled.div``
