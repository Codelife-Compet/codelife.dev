import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@codelife-ui/react'
import React from 'react'
import { darkTheme } from '@codelife-ui/react/styles'
export default {
  title: 'Form/Checkbox',
  component: Checkbox,
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
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
