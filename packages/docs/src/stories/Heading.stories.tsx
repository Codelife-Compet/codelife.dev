import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@codelife-ui/react'
export default {
  title: 'Typograph/Heading',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Heading',
  },
} satisfies Meta<TextProps>

export const Body: StoryObj<TextProps> = {}
export const Heading: StoryObj<TextProps> = {
  args: {
    children: 'H1 Heading',
    fontfamily: 'heading',
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
