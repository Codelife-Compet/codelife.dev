import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, ButtonProps } from '@codelife-ui/react'
import { FaGithub } from 'react-icons/fa'
import React from 'react'
export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'default',
    colors: 'primary',
    children: 'Submit lesson',
  },
  argTypes: {
    colors: {
      description: 'The button variant color',
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
      },
    },
    onClick: {
      description: 'The action to send when the button is clicked',
      action: 'click',
    },
  },
  decorators: [
    (story, context) => (
      <Box css={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            Default Button
          </span>
          {story()}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            Button With Icon
          </span>
          {story({
            args: {
              ...{ ...context.args },
              children: (
                <>
                  Github <FaGithub />
                </>
              ),
            },
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            Outlined Button
          </span>
          {story({
            args: {
              ...{ ...context.args },
              children: 'References',
              variant: 'outlined',
            },
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Text Button
          </span>
          {story({
            args: {
              ...{ ...context.args },
              children: 'Learn more',
              variant: 'text',
            },
          })}
        </div>
      </Box>
    ),
  ],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    colors: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    colors: 'tertiary',
  },
}
Button.displayName = 'Button'
