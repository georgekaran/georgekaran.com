import React from 'react'
import { screen } from '@testing-library/react'

import { render } from '@/test/helpers'
import ContactPage from '@/pages/contact'
import messages from '@/main/config/messages'

const message = messages.pt

describe('Contact Page', () => {
  it('should render with correct data', () => {
    render(
      <ContactPage />
    )
    expect(screen.getByText(message.contact_me)).toBeInTheDocument()
    expect(screen.getByText(message.contact_me_description + ' 😀')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('alt', message.contact_me_image_alt)
  })

  it('should match snapshot', () => {
    const { container } = render(
      <ContactPage />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
