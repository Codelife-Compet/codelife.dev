import { StoryObj, Meta } from '@storybook/react'
import { OutroBotao, OutroBotaoProps, Text } from '@codelife-ui/react'
import React from 'react'
export default {
  title: 'Form/OutroBotao',
  component: OutroBotao,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    children: <Text>OutroBotao element</Text>,
  },
  argTypes: {
    variant: {
      description: 'variante da variante',
      options: ['primary', 'secondary'],
      control: {type: "inline-radio"},
    },
  },
} as Meta<OutroBotaoProps>

export const Primary: StoryObj<OutroBotaoProps> = {}
OutroBotao.displayName = 'OutroBotao'
