import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@codelife-ui/react'
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/bidwolf.png',
    alt: 'Henrique de Paula Rodrigues',
    size: 'sm',
    theme: 'regular',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    src: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    theme: {
      options: ['regular', 'owner', 'contributor', 'moderator'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Small: StoryObj<AvatarProps> = {}
export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
  },
}
export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}
export const ExtraLarge: StoryObj<AvatarProps> = {
  args: {
    size: 'xl',
  },
}
export const SmallWithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
export const MediumWithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: 'md',
  },
}
export const LargeWithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: 'lg',
  },
}
export const ExtraLargeWithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: 'xl',
  },
}
Avatar.displayName = 'Avatar'
