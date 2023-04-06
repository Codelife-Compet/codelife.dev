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
  '&:disabled': {
    cursor: 'not-allowed',
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  variants: {
    variant: {
      primary: {
        color: '$codelife-black-900',
        backgroundColor: '$codelife-primary-700',
        '&:not(:disabled):hover': {
          backgroundColor: '$codelife-primary-500',
        },
        '&:disabled': {
          backgroundColor: '$codelife-primary-700',
          opacity: 0.5,
        },
      },
      secondary: {
        color: '$codelife-primary-500',
        border: '2px solid $codelife-primary-700',
        '&:not(:disabled):hover': {
          backgroundColor: '$codelife-primary-700',
          color: '$codelife-black-900',
        },
        '&:disabled': {
          color: '$codelife-gray-200',
          borderColor: '$codelife-gray-200',
        },
      },
      tertiary: {
        color: '$codelife-gray-100',
        '&:not(:disabled):hover': {
          color: '#fff',
          backgroundColor: '$codelife-gray-900',
        },
        '&:disabled': {
          color: '$codelife-gray600',
          borderColor: '$codelife-gray-200',
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
    variant: 'primary',
    size: 'md',
  },
})
export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
