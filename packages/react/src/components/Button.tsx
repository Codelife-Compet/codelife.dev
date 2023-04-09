import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$body',
  borderRadius: '$md',
  textAlign: 'center',
  fontWeight: '$medium',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  gap: '$2',
  backgroundColor: 'transparent',
  outline: 0,
  padding: '0 $4',
  transition: 'all ease 275ms',
  '&:not(:disabled):active': {
    filter: 'brightness(120%)',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: '$codelife-gray-500',
    backgroundColor: '$codelife-gray-900 ',
    borderColor: '$codelife-gray-500',
    filter: 'brightness(50%)',
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$codelife-primary-700',
        '&:not(:disabled):hover': { backgroundColor: '$codelife-primary-900' },
      },
      secondary: {
        backgroundColor: '$codelife-secondary-700',
        '&:hover': { backgroundColor: '$codelife-secondary-900' },
      },
      tertiary: {
        backgroundColor: '$codelife-tertiary-700',
        '&:hover': { backgroundColor: '$codelife-tertiary-900' },
      },
    },

    outlined: {
      true: {
        border: '2px solid',
        backgroundColor: 'transparent !important',
      },
    },
    text: {
      true: {
        borderColor: 'transparent',
        backgroundColor: 'transparent !important',
        '&:not(:disabled):hover': {
          backgroundColor: 'transparent',
          opacity: 0.8,
        },
        '&:not(:disabled):active': {
          opacity: 0.5,
        },
      },
    },
    size: {
      sm: {
        height: '$8',
      },
      md: {
        height: '$12',
        padding: '0 $8',
      },
      lg: {
        height: '$14',
        padding: '0 $10',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        color: '$codelife-primary-700',
        borderColor: '$codelife-primary-700',
        '&:not(:disabled):hover': {
          borderColor: '$codelife-primary-900',
          color: '$codelife-black-900',
          backgroundColor: '$codelife-primary-900 !important',
        },
      },
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        color: '$codelife-secondary-700',
        borderColor: '$codelife-secondary-700',
        '&:not(:disabled):hover': {
          borderColor: '$codelife-secondary-900',
          color: '$codelife-black-900',
          backgroundColor: '$codelife-secondary-900 !important',
        },
      },
    },
    {
      variant: 'tertiary',
      outlined: true,
      css: {
        color: '$codelife-tertiary-700',
        borderColor: '$codelife-tertiary-700',
        '&:not(:disabled):hover': {
          color: '$codelife-black-900',
          backgroundColor: '$codelife-tertiary-900 !important',
        },
      },
    },
    {
      variant: 'primary',
      text: true,
      css: {
        color: '$codelife-primary-700',
      },
    },
    {
      variant: 'secondary',
      text: true,
      css: {
        color: '$codelife-secondary-700',
      },
    },
    {
      variant: 'tertiary',
      text: true,
      css: {
        color: '$codelife-tertiary-700',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
