import { StoryObj, Meta } from '@storybook/react'
import { Box, Heading as heading, HeadingProps } from '@codelife-ui/react'
import { darkTheme } from '@codelife-ui/react/styles'
export default {
  title: 'Typograph/Heading',
  component: heading,
  tags: ['autodocs'],
  args: {
    children: 'Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      description: 'The size of the heading.',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <>
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginBlock: '$4',
          }}
          className={context.parameters.theme === 'dark' ? darkTheme : ''}
        >
          {Story()}
        </Box>
      </>
    ),
  ],
} as Meta<HeadingProps>

export const Body: StoryObj<HeadingProps> = {}
export const OnDark: StoryObj<HeadingProps> = {
  parameters: {
    theme: 'dark',
  },
}
export const Heading: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading is `h2` tag by default but you can change it manually with the property `as`',
      },
    },
  },
}
heading.displayName = 'Heading'
