import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@codelife-ui/react'
export default {
  title: 'Button',
  component: Button,
  args: { children: 'Login' },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
