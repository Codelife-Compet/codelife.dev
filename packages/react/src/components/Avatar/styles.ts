import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
  outline: '2px solid transparent',
  outlineOffset: '-1px',
  '&::after': {
    content: '',
    position: 'absolute',
    top: '3px',
    left: '3px',
    bottom: '3px',
    right: '3px',
    borderRadius: 'inherit',
    boxShadow: '0 0 0 3px black',
    zIndex: '1',
  },
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center,transparent,black)',
    opacity: 0.5,
    transition: 'opacity 0.25s ease-in-out',
  },
  '&:hover': {
    '&::before': {
      opacity: '0.3',
    },
  },

  variants: {
    size: {
      sm: {
        width: '$14',
        height: '$14',
        outlineWidth: '2px',
      },
      md: {
        width: 'calc(2*$14)',
        height: 'calc(2*$14)',
        outlineWidth: '4px',
      },
      lg: {
        width: 'calc(4*$14)',
        height: 'calc(4*$14)',
        outlineWidth: '8px',
      },
      xl: {
        width: 'calc(6*$14)',
        height: 'calc(6*$14)',
        outlineWidth: '12px',
      },
    },
    theme: {
      regular: { outlineColor: '$codelife-gray-500' },
      moderator: { outlineColor: '$codelife-tertiary-500' },
      owner: { outlineColor: '$codelife-secondary-500' },
      contributor: { outlineColor: '$codelife-primary-500' },
    },
  },
  defaultVariants: {
    size: 'sm',
    theme: 'regular',
  },
})
export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
  backgroundColor: '$codelife-primary-500',
})
export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$codelife-primary-500',
  color: '$codelife-primary-900',
  variants: {
    size: {
      sm: {
        svg: {
          width: '$10',
          height: '$10',
        },
      },
      md: {
        svg: {
          width: 'calc(2*$10)',
          height: 'calc(2*$10)',
        },
      },
      lg: {
        svg: {
          width: 'calc(4*$10)',
          height: 'calc(4*$10)',
        },
      },
      xl: {
        svg: {
          width: 'calc(6*$10)',
          height: 'calc(6*$10)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
