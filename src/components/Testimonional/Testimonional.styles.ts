import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background: ${theme.colors.black02};
    border-radius: 2.4rem;
    max-width: 70rem;
  `}
`

export const TestimonialWrapper = styled.div`
  display: flex;
`

export const Testimonial = styled.p`
  ${({ theme }) => css`
    flex: 0.85;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`

export const Quotes = styled.i`
  ${({ theme }) => css`
    flex: 0.15;
    font-weight: ${theme.font.bold};
    font-size: 7.2rem;
    color: ${theme.colors.black04};
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin: ${theme.spacings.small} ${theme.spacings.xsmall} ${theme.spacings.xxsmall} 0;
  `}
`

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const TitleBox = styled.div``

export const Author = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
  `}
`

export const Company = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.green};
    font-weight: ${theme.font.bold};
  `}
`
