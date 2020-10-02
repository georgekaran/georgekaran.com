import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Planet, PlanetProps } from '.'
import { Technology } from '@/components/Technology'

export default {
  title: 'Planet',
  component: Planet
} as Meta

export const Default: Story<PlanetProps> = (args) => <Planet {...args} />

export const withOrbitElements: Story<PlanetProps> = (args) => {
  const orbitElements = [
    <Technology key="react" image="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png" alt="React" size={args.size} />,
    <Technology key="node" image="https://jsremotely.com/static/icons/nodejs.png" alt="Node JS" size={args.size} />,
    <Technology key="golang" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png" alt="Golang" size={args.size} />,
    <Technology key="java" image="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" alt="Java" size={args.size} />,
    <Technology key="typescript" image="https://plugins.jetbrains.com/files/10841/95848/icon/pluginIcon.png" alt="Typescript" size={args.size} />
  ]

  return (
    <Planet {...args} orbitElements={orbitElements} />
  )
}
