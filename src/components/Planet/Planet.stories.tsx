import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Planet, PlanetProps } from '.'

export default {
  title: 'Planet',
  component: Planet
} as Meta

export const Default: Story<PlanetProps> = (args) => <Planet {...args} />
