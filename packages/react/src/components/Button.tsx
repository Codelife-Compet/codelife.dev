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
  opacity: 0.8,
  '&:disabled': {
    cursor: 'not-allowed',
    color: '$text-disabled',
    opacity: '33%',
  },
  '&:not(:disabled):is(:hover,:focus)': {
    opacity: 1,
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$codelife-primary-700',
        border: '2px solid $codelife-primary-700',
      },
      secondary: {
        backgroundColor: '$codelife-secondary-700',
        border: '2px solid $codelife-secondary-700',
      },
      tertiary: {
        backgroundColor: '$codelife-tertiary-700',
        border: '2px solid $codelife-tertiary-700',
      },
      danger: {
        backgroundColor: '$codelife-danger-700',
        border: '2px solid $codelife-danger-700',
        color: '$codelife-gray-100',
        '&:disabled': {
          color: '$codelife-gray-300 ',
        },
      },
    },

    outlined: {
      true: {
        border: '2px solid',
        backgroundColor: 'transparent !important',
        '&:disabled': {
          borderColor: '$text-additional',
        },
      },
    },
    text: {
      true: {
        borderColor: 'transparent !important',
        backgroundColor: 'transparent !important',
        '&:not(:disabled):hover': {
          backgroundColor: 'transparent',
        },
        '&:disabled': {
          borderColor: 'transparent',
        },
      },
    },
    size: {
      sm: {
        height: '$8',
        fontSize: '$sm',
      },
      md: {
        height: '$12',
        padding: '0 $8',
        fontSize: '$md',
      },
      lg: {
        height: '$14',
        padding: '0 $10',
        fontSize: '$lg',
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
          color: '$text-default',
          backgroundColor: '$codelife-primary-700 !important',
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
          color: '$text-default',
          backgroundColor: '$codelife-secondary-700 !important',
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
          color: '$text-default',
          backgroundColor: '$codelife-tertiary-700 !important',
        },
      },
    },
    {
      variant: 'danger',
      outlined: true,
      css: {
        color: '$codelife-danger-500',
        borderColor: '$codelife-danger-500',
        '&:not(:disabled):hover': {
          color: '$text-default',
          backgroundColor: '$codelife-danger-500 !important',
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
        color: '$codelife-secondary-500',
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
Button.displayName = 'Button'
