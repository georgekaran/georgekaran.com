import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Select, SelectProps } from '.'

export default {
  title: 'Select',
  component: Select,
  args: {
    options: ['EN', 'PT-BR', 'ES']
  }
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
