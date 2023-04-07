import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@codelife-ui/react'
import React from 'react'
export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Box element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
Box.displayName = 'Box'
