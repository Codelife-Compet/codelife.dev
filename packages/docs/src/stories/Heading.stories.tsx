import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@codelife-ui/react'
export default {
  title: 'Typograph/Heading',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      description: 'The size of the heading.',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Body: StoryObj<TextProps> = {}
export const Heading: StoryObj<TextProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading is `h2` tag by default but you can change it manually with the property `as`',
      },
    },
  },
}
Text.displayName = 'Heading'
