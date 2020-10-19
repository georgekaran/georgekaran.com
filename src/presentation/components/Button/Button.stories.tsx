import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

export const asLink: Story = (args) => <Button {...args} />

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Button',
  icon: <AddShoppingCart />
}

asLink.args = {
  size: 'large',
  children: 'Some link',
  as: 'a',
  href: '/link'
}

Default.args = {
  children: 'Button'
}
