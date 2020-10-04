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
    <Technology key="react" image="/img/technology/react.png" alt="React" size={args.size} />,
    <Technology key="node" image="/img/technology/nodejs.png" alt="Node JS" size={args.size} />,
    <Technology key="golang" image="/img/technology/golang.png" alt="Golang" size={args.size} />,
    <Technology key="java" image="/img/technology/java.png" alt="Java" size={args.size} />,
    <Technology key="typescript" image="/img/technology/typescript.png" alt="Typescript" size={args.size} />,
    <Technology key="mongo" image="/img/technology/mongo.png" alt="Mongo DB" size={args.size} />,
    <Technology key="aws" image="/img/technology/aws.png" alt="AWS" size={args.size} />,
    <Technology key="docker" image="/img/technology/docker.png" alt="Docker" size={args.size} />,
    <Technology key="postgresql" image="/img/technology/postgresql.png" alt="Postgres SQL" size={args.size} />
  ]

  return (
    <Planet {...args} orbitElements={orbitElements} />
  )
}
