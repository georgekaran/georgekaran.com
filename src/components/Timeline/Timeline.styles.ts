import styled, { css, DefaultTheme } from 'styled-components'
import { ChevronDown } from '@styled-icons/feather/ChevronDown'

import { Tag as TagType } from '.'

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  max-height: 70rem;
  overflow: auto;

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`

type LineProps = {
  scrollHeight: number
}

export const Line = styled.div<LineProps>`
  ${({ theme, scrollHeight }) => css`
    border: 1px solid ${theme.colors.green};
    height: ${scrollHeight}px;
    position: absolute;
    left: 47px;
  `}
`

export const Year = styled.time`
  ${({ theme }) => css`
    margin-right: 1.4rem;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.green};

    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      left: 4rem;
      top: 2px;
      width: ${theme.spacings.xsmall};
      height: ${theme.spacings.xsmall};
      background: ${theme.colors.green};
    }
  `}
`

export const YearGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const YearEventsBox = styled.div`
  display: grid;
  grid-template-areas: "year event";
  grid-template-columns: 64px auto;
`

export const YearColumn = styled.div`
  display: grid;
  grid-area: year;
  position: relative;
`

export const EventsColumn = styled.div`
  display: grid;
  grid-area: event;
  margin-top: 20px;
`

export const Event = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    margin-bottom: ${theme.spacings.xsmall};

    &::after {
      content: '';
      position: absolute;
      left: -15px;
      width: 12px;
      height: 1px;
      background: linear-gradient(to right, ${theme.colors.green}, rgba(40, 245, 190, 0));
      top: 45px;
    }
  `}
`

const tagModifiers = {
  education: (theme: DefaultTheme) => css`
    background: ${theme.colors.green01};
  `,
  event: (theme: DefaultTheme) => css`
    background: ${theme.colors.pink};
  `,
  professional: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
  `
}

type TagProps = {
  type: TagType
}

export const Tag = styled.div<TagProps>`
  ${({ theme, type }) => css`
    border-radius: 12px;
    display: inline-block;
    padding: 4px 8px;

    font-weight: ${theme.font.bold};
    font-size: 10px;
    color: ${theme.colors.white};

    ${!!type && tagModifiers[type](theme)};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`

export const Date = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xsmall};
    font-size: 12px;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: 14px;
    letter-spacing: -0.01em;
    color: ${theme.colors.black04};
  `}
`

export const Flex = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xxsmall};
    align-items: center;
  `}

`

export const ScrollDown = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 89%;
    left: 0rem;
    width: 100%;
    background: linear-gradient(180.22deg, ${theme.colors.black01} 2.0%, rgba(0, 0, 0, 0.5) 89.85%);
    padding: 12px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const ScrollText = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const ScrollWrapper = styled.div`
  height: 4.4rem;
  width: 4.4rem;
`

export const ChevronDownIcon = styled(ChevronDown)`
  color: white;
  animation-name: upDownAnimation;
  animation-duration: 2000ms;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;

  @keyframes upDownAnimation {
    0% {
        margin-top: 0px;
    }

    50% {
      margin-top: 8px;
    }

    100% {
      margin-top: 0;
    }
  }
`
