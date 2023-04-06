import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@codelife-ui/react'
export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Login' },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
