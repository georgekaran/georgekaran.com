import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
    <Menu />
  </div>
)

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
