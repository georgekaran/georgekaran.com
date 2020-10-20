import React from 'react'
import { Github as GithubIcon } from '@styled-icons/feather/Github'

import { ContactCard } from '.'
import { render, msg } from '@/test/helpers'
import { fireEvent, RenderResult, screen, waitFor } from '@testing-library/react'

const shouldOverlayBeVisible = (visible: boolean) => {
  const overlay = screen.getByTestId('overlay')
  expect(overlay).toHaveAttribute('aria-hidden', visible ? 'false' : 'true')
  expect(overlay).toHaveStyle({
    opacity: visible ? '1' : '0'
  })
}

const makeSut = (): RenderResult => {
  return render(
    <ContactCard
      socialMedia="Github"
      icon={<GithubIcon aria-label="Github Icon" />}
      previewLink="georgekaran"
      fullLink="https://github.com/georgekaran"
    />
  )
}

describe('<ContactCard />', () => {
  let clipboardText: string = ''

  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: (data: string): Promise<void> => new Promise((resolve) => {
          clipboardText = data
          resolve()
        })
      }
    })
  })

  beforeEach(() => {
    clipboardText = ''
  })

  it('should render with initial state', () => {
    makeSut()
    expect(screen.getByLabelText(/github icon/i)).toBeInTheDocument()
    expect(screen.getByText('georgekaran')).toBeInTheDocument()
    expect(screen.getByLabelText(/copiar github url/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open github link/i)).toBeInTheDocument()
    shouldOverlayBeVisible(false)
  })

  it('should present/hide copy and open link icons on mouse events', () => {
    const { container } = makeSut()
    fireEvent.mouseEnter(container.firstChild!)
    shouldOverlayBeVisible(true)

    fireEvent.mouseLeave(container.firstChild!)
    shouldOverlayBeVisible(false)
  })

  it('should copy link to clipboard', async () => {
    makeSut()
    let containerCopy = screen.getByLabelText(/Copiar github url/i).parentElement!
    fireEvent.click(containerCopy)
    containerCopy = await waitFor(() => screen.getByLabelText(/Copiar github url/i).parentElement!)
    expect(clipboardText).toEqual('https://github.com/georgekaran')
    expect(containerCopy).toHaveStyleRule(
      'content',
      `'${msg.copy_to_clipboard}'`,
      {
        modifier: '::before'
      }
    )
  })
})
