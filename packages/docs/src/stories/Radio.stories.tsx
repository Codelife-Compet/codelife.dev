import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Radio, RadioProps } from '@codelife-ui/react'
import { darkTheme } from '@codelife-ui/react/styles'
export default {
  title: 'Form/Radio',
  component: Radio,
  args: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginBlock: '$4',
          }}
        >
          {Story()}
        </Box>
        <Box
          className={darkTheme}
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {Story()}
        </Box>
      </>
    ),
  ],
} as Meta<RadioProps>

export const Primary: StoryObj<RadioProps> = {
  args: {
    children: <Text>Option 1</Text>,
  },
}
