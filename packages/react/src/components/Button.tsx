import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$body',
  border: 0,
  borderRadius: '$md',
  textAlign: 'center',
  fontWeight: '$medium',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  gap: '$2',
  outline: 0,
  padding: '0 $4',
  transition: 'all ease 275ms',
  '&:not(:disabled):active': {
    filter: 'brightness(120%)',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  variants: {
    colors: {
      primary: {
        color: '$codelife-primary-700',
        border: '2px solid $codelife-primary-700',
        backgroundColor: '$codelife-primary-700',
      },
      secondary: {
        color: '$codelife-secondary-700',
        border: '2px solid $codelife-secondary-700',
        backgroundColor: '$codelife-secondary-700',
      },
      tertiary: {
        color: '$codelife-tertiary-700',
        border: '2px solid $codelife-tertiary-700',
        backgroundColor: '$codelife-tertiary-700',
      },
    },
    variant: {
      default: {
        color: '$codelife-black-900 !important',
        '&:not(:disabled):hover': {
          opacity: 1,
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      outlined: {
        opacity: 1,
        '&:not(:hover)': {
          border: '2px solid currentColor ',
          backgroundColor: 'transparent',
        },
        '&:disabled': {
          color: '$codelife-gray-700 !important',
          backgroundColor: 'transparent !important',
          borderColor: '$codelife-gray-700 !important',
          filter: 'brightness(70%)',
        },
        '&:hover': {
          color: '$codelife-black-900',
        },
      },
      text: {
        borderColor: 'transparent !important',
        backgroundColor: 'transparent !important',
        '&:not(:disabled):hover': {
          opacity: 0.8,
        },
        '&:disabled': {
          color: '$codelife-gray-700',
          backgroundColor: 'transparent !important',
          filter: 'brightness(70%)',
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
  defaultVariants: {
    size: 'md',
    colors: 'primary',
    variant: 'default',
  },
})
export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
