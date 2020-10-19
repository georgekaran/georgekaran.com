import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story = () => (
  <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
    <Footer />
  </div>
)

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
