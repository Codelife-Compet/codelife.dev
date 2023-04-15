import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Switch, Socials, SocialRootProps } from '@codelife-ui/react'
import React, { useState } from 'react'
import { darkTheme } from '@codelife-ui/react/styles'
import { FaSun, FaMoon, FaGithub, FaDiscord } from 'react-icons/fa'
export default {
  title: 'info/Socials',
  component: Socials.Root,
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
          </Box>
        </>
      )
    },
  ],
} as Meta<SocialRootProps>

export const SocialsContainer: StoryObj<SocialRootProps> = {
  args: {
    children: (
      <>
        <Socials.IconContainer link="https://github.com" size={'md'}>
          <FaGithub />
        </Socials.IconContainer>
        <Socials.IconContainer link="https://discord.com" size={'md'}>
          <FaDiscord />
        </Socials.IconContainer>
      </>
    ),
  },
}
