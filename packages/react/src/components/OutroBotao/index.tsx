import { ComponentProps } from 'react'
import { styled } from '../../../styles'

export const OutroBotao = styled('div', {
  color: '$codelife-black-900',
  borderRadius: '$lg',
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$codelife-primary-500',
      },
      secondary: {
        backgroundColor: '$codelife-secondary-500',
      },
    },
    size: {
      md: {
        padding: '$2 $4',
        fontSize: '$md',
      },
      lg: {
        padding: '$4 $6',
        fontSize: '$lg',
      },
    },
  },
})
export type OutroBotaoProps = ComponentProps<typeof OutroBotao> & {}

export const Teste = styled('div', {
  color: '$codelife-black-400',
  backgroundColor: '$codelife-gray-500',
  width: "100%",
  display: 'flex',
})
