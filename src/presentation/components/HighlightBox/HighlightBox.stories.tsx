import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { HighlightBox, HighlightBoxProps } from '.'

export default {
  title: 'HighlightBox',
  component: HighlightBox
} as Meta

export const Default: Story<HighlightBoxProps> = (args) => <HighlightBox {...args} />

Default.args = {
  primaryText: '2',
  secondaryText: 'anos de experiência!'
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
