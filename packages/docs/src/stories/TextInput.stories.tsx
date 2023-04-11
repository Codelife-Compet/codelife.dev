import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@codelife-ui/react'
import { darkTheme } from '@codelife-ui/react/styles'
import React from 'react'
export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    disabled: false,
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: 'Toggle the button disable property',
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      description: 'The input placeholder ',
    },
  },
  decorators: [
    (Story) => (
      <>
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginBlock: '$4',
          }}
        >
          <Text size={'sm'}>Email Address</Text>
          {Story()}
        </Box>
        <Box
          as="label"
          className={darkTheme}
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Text size={'sm'}>Email Address</Text>
          {Story()}
        </Box>
      </>
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
