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
    variant: 'primary',
    disabled: false,
    children: 'Submit lesson',
  },
  argTypes: {
    variant: {
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
              outlined: true,
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
              text: true,
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
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}
Button.displayName = 'Button'
