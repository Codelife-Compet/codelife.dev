import { StoryObj, Meta } from '@storybook/react'
import { Text, Switch, Card, Heading, RootProps } from '@codelife-ui/react'
import React, { useState } from 'react'
import { darkTheme } from '@codelife-ui/react/styles'
import { FaSun, FaMoon } from 'react-icons/fa'
export default {
  title: 'info/Card',
  component: Card.Root,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [isActive, setIsActive] = useState<boolean>()
      return (
        <>
          <div className={isActive ? darkTheme : ''}>
            <Text as={'label'} size={'sm'} htmlFor="switchTheme">
              Switch
            </Text>
            <Switch
              CheckedIcon={FaMoon}
              UncheckedIcon={FaSun}
              onCheckedChange={() => setIsActive(!isActive)}
              isActive={isActive}
            />
            {Story({
              args: {
                ...context.args,
              },
            })}
          </div>
        </>
      )
    },
  ],
} as Meta<RootProps>

export const CardRoot: StoryObj<RootProps> = {
  args: {
    elevation: 1,
    children: [
      <Card.Header key={'Card-Header'}>
        <Card.IconContainer>
          <img src="/images/avatar.png" alt="avatar" />
        </Card.IconContainer>
        <Heading as={'h3'} css={{ lineHeight: '$shorter' }}>
          Aprenda brincando
        </Heading>
      </Card.Header>,
      <Text size={'lg'} key={'Card-subtitle'}>
        Complete os desafios, avançando os níveis, progressivamente, e convide
        seus amigos para participar!
      </Text>,
    ],
  },
}
