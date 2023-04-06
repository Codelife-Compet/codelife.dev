import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@codelife-ui/react'
import React from 'react'
export default {
  title: 'Typograph/TextArea',
  component: TextArea,
  args: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Text size={'sm'}>Any suggestion? type here</Text>
        {Story()}
      </Box>
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
