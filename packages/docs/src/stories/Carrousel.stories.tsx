import {
  TItemComponent,
  Carousel,
  Heading,
  darkTheme,
  Box,
  Text,
  Avatar,
} from '@codelife-ui/react'
import { StoryObj, Meta } from '@storybook/react'

type TGithubContributor = {
  name: string
  description: string
  id: number | string
  imgUrl: string
  role: 'regular' | 'contributor' | 'owner' | 'moderator'
}

const githubContributors: TGithubContributor[] = [
  {
    name: 'Henrique de Paula',
    description:
      "Yoo! I am an engineering student from Belo Horizonte, Brazil in love with IT who seeks to learn more what it is like to program in the real world.Let's code together and have fun!",
    id: 1,
    imgUrl: 'https://github.com/bidwolf.png',
    role: 'contributor',
  },
  {
    name: 'Luiz Eduardo Leroy',
    description:
      'Olá, eu sou Luiz Eduardo Leroy 👋 Graduando em Engenharia de Computação no CEFET-MG.🔭 Trabalhando com Front-end🌱 Estudando React e Typescript',
    id: 2,
    imgUrl: 'https://github.com/luizleroy01.png',
    role: 'contributor',
  },
  {
    name: 'João Pedro Silva Santos',
    description: 'Olá, eu sou João, estou contribuindo para o Codelife!',
    id: 2,
    imgUrl: 'https://github.com/JoaoPedroSilvaSantos.png',
    role: 'contributor',
  },
  {
    name: 'Pedro Augusto de Portilho Ronzani',
    description:
      'Hi there 👋 I am a Junior at Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG) I’m currently learning: Computer Engineering (3/10)',
    id: 2,
    imgUrl: 'https://github.com/PedroRonzani18.png',
    role: 'contributor',
  },
  {
    name: 'Francisco Abreu ',
    description:
      "Hello there! My name is Francisco, pleasure to meet y'all! I'm a 22 years old undergrad student majoring Computer Engineering at the Centro Federal de Educação Tecnológica de Minas Gerais (CEFET/MG). Despite being in my junior year, I am a guy that hasn't decided a specific path in my professional area, considering the fact that I'm always down to learn new things! To see more about my projects that I've done and currently working on, check out my repository and social medias!",
    id: 3,
    imgUrl: 'https://github.com/francis1408.png',
    role: 'contributor',
  },
]
const ItemComponent: TItemComponent<TGithubContributor> = ({
  description,
  id,
  imgUrl,
  name,
  role,
}) => {
  return (
    <Box
      css={{
        all: 'unset',
        padding: '$2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '$4',
      }}
    >
      <Box
        css={{
          all: 'unset',
          backgroundColor: '$surface',
          padding: '$4',
          borderRadius: '$lg',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '$4',
        }}
      >
        <Box
          css={{
            all: 'unset',
            display: 'flex',
            alignItems: 'center',
            gap: '$4',
            width: '100%',
          }}
        >
          <Avatar
            src={imgUrl}
            alt={`${name} avatar`}
            theme={role}
            size={'sm'}
          />
          <Heading as={'h3'}>{name}</Heading>
        </Box>
        <Text
          css={{
            maxHeight: '$80',
            width: '80%',
          }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}
export default {
  title: 'Data display/Carousel',
  component: Carousel<TGithubContributor>,
  tags: ['autodocs'],
  args: {
    items: githubContributors,
    resourceName: 'GithubContributors',
    variant: 'tertiary',
    ItemComponent,
  },
  decorators: [
    (Story, context) => (
      <>
        <Box
          as="section"
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
} satisfies Meta<typeof Carousel<TGithubContributor>>
export const CarouselComponent: StoryObj<typeof Carousel<TGithubContributor>> =
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `Carousel` component can be used in any kind of data! That means if you want to create a Carousel of fruits you just need to pass the type of fruit to the component and boom! you have a delicious carousel!',
        },
      },
    },
  }
export const CarouselComponentOnDark: StoryObj<
  typeof Carousel<TGithubContributor>
> = {
  parameters: {
    theme: 'dark',
  },
}
