import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'

import { MediaMatch } from '.'

type SutTypes = {
  sut: RenderResult
  desktopHeading: Element
  mobileHeading: Element
}

const makeSut = (): SutTypes => {
  const sut = render(
    <>
      <MediaMatch greaterThan="medium">
        <h1 data-testid="desktop">Desktop</h1>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <h1 data-testid="mobile">Mobile</h1>
      </MediaMatch>
    </>
  )

  return {
    sut,
    desktopHeading: screen.getByTestId('desktop'),
    mobileHeading: screen.getByTestId('mobile')
  }
}

describe('<MediaMatch />', () => {
  test('should be hidden if no media query is passed', () => {
    const { desktopHeading, mobileHeading } = makeSut()
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  test('should show or hide content based on the media provided', () => {
    const { desktopHeading, mobileHeading } = makeSut()
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
