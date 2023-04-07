import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@codelife-ui/react'
import React from 'react'
export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Text size={'sm'}>Email Address</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: { placeholder: 'Type your name' },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
