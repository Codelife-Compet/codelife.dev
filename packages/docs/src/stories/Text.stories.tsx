import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@codelife-ui/react'
export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
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
