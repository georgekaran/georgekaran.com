import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Space } from '.'
import theme from '@/styles/theme'

export default {
  title: 'Space',
  component: Space
} as Meta

export const Default: Story = () => (
  <div style={{ width: '130rem', height: '100rem', background: theme.colors.black }}>
    <Space />
  </div>
)

Default.parameters = {
  layout: 'fullscreen'
}
