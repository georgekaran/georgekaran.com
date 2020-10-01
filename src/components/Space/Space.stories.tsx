import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Space, SpaceProps } from '.'
import theme from '@/styles/theme'

export default {
  title: 'Space',
  component: Space
} as Meta

export const Default: Story<SpaceProps> = (args) => (
  <div style={{ width: '130rem', height: '100rem', background: theme.colors.black }}>
    <Space {...args} />
  </div>
)

Default.parameters = {
  layout: 'fullscreen'
}
