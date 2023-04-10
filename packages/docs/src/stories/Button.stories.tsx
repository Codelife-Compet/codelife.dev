import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, ButtonProps, Text } from '@codelife-ui/react'
import { FaGithub, FaExclamationTriangle } from 'react-icons/fa'
import React from 'react'
import { darkTheme } from '@codelife-ui/react/styles'
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
    (story, context) => {
      return (
        <Box
          css={{
            display: 'grid',
            gridTemplateRows: 'repeat(4,6rem)',
            gap: 16,
            gridAutoFlow: 'row',
            alignContent: 'center',
            placeContent: 'center',
            alignItems: 'center',
          }}
          className={context.parameters.theme === 'dark' ? darkTheme : ''}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  decorators: [
    (story, context) => (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Default Button
          </Text>
          {story()}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Button With Icon
          </Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text size={context.args.size}>Outlined Button</Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            {' '}
            Text Button
          </Text>
          {story({
            args: {
              ...{ ...context.args },
              children: 'Learn more',
              text: true,
            },
          })}
        </div>
      </>
    ),
  ],
}
export const PrimaryOnDark: StoryObj<ButtonProps> = {
  decorators: [
    (story, context) => (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Default Button
          </Text>
          {story()}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Button With Icon
          </Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text size={context.args.size}>Outlined Button</Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            {' '}
            Text Button
          </Text>
          {story({
            args: {
              ...{ ...context.args },
              children: 'Learn more',
              text: true,
            },
          })}
        </div>
      </>
    ),
  ],
  parameters: {
    theme: 'dark',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
  },
  decorators: [
    (story, context) => (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Default Button
          </Text>
          {story()}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Button With Icon
          </Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text size={context.args.size}>Outlined Button</Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            {' '}
            Text Button
          </Text>
          {story({
            args: {
              ...{ ...context.args },
              children: 'Learn more',
              text: true,
            },
          })}
        </div>
      </>
    ),
  ],
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
  decorators: [
    (story, context) => (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Default Button
          </Text>
          {story()}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            Button With Icon
          </Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text size={context.args.size}>Outlined Button</Text>
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
            justifyContent: 'space-around',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Text
            size={context.args.size}
            css={{
              paddingTop: '$2',
              paddingBottom: '$2',
            }}
          >
            {' '}
            Text Button
          </Text>
          {story({
            args: {
              ...{ ...context.args },
              children: 'Learn more',
              text: true,
            },
          })}
        </div>
      </>
    ),
  ],
}
export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: (
      <>
        {' '}
        Are you sure?
        <FaExclamationTriangle />
      </>
    ),
  },
}
Button.displayName = 'Button'
