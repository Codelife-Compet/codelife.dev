import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@codelife-ui/react'
import { FaGithub } from 'react-icons/fa'
import React from 'react'
export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: { variant: 'primary', size: 'md', children: 'Send' },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Login <FaGithub fontWeight={700} />
      </>
    ),
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Login',
    disabled: true,
  },
}
Button.displayName = 'Button'
