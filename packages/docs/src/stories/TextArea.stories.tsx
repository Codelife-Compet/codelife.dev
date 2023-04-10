import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@codelife-ui/react'
import React from 'react'
import { darkTheme } from '@codelife-ui/react/styles'
export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  tags: ['autodocs'],
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
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: { placeholder: 'Insert some text here' },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
