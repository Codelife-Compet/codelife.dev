import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextProps } from '@codelife-ui/react'
import { darkTheme } from '@codelife-ui/react/styles'
export default {
  title: 'Typograph/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'The size of the text',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <>
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginBlock: '$4',
          }}
          className={context.parameters.theme === 'dark' ? darkTheme : ''}
        >
          {Story()}
          {Story({
            ...context.args,
            args: {
              as: 'strong',
            },
          })}
        </Box>
      </>
    ),
  ],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ipsam praesentium, ullam voluptate eaque pariatur, minus ducimus obcaecati vero magnam suscipit recusandae facere commodi cum doloribus. Quis illo quia eveniet.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const OnDark: StoryObj<TextProps> = {
  parameters: {
    theme: 'dark',
  },
}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
Text.displayName = 'Text'
