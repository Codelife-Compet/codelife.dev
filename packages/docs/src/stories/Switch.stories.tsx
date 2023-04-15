import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Switch, SwitchProps } from '@codelife-ui/react'
import React, { useState } from 'react'
import { darkTheme } from '@codelife-ui/react/styles'
import { FaSun, FaMoon } from 'react-icons/fa'
export default {
  title: 'Form/Switch',
  component: Switch,
  args: {
    size: 'md',
    variant: 'primary',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [isActive, setIsActive] = useState<boolean>()
      return (
        <>
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginBlock: '$4',
            }}
            className={isActive ? darkTheme : ''}
          >
            <Text as={'label'} size={'sm'} htmlFor="switchTheme">
              Switch
            </Text>
            {Story({
              args: {
                isActive,
                onCheckedChange: () => setIsActive(!isActive),
                id: 'switchTheme',
                ...context.args,
              },
            })}
          </Box>
        </>
      )
    },
  ],
} as Meta<SwitchProps>

export const DefaultSwitch: StoryObj<SwitchProps> = {}
export const SwitchWithIcons: StoryObj<SwitchProps> = {
  args: {
    UncheckedIcon: FaSun,
    CheckedIcon: FaMoon,
  },
}
