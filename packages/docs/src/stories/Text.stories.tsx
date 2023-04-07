import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@codelife-ui/react'
export default {
  title: 'Typograph/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'The size of the text',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ipsam praesentium, ullam voluptate eaque pariatur, minus ducimus obcaecati vero magnam suscipit recusandae facere commodi cum doloribus. Quis illo quia eveniet.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
Text.displayName = 'Text'
