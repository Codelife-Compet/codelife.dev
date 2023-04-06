import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  backgroundColor: 'inherit',
  variants: {
    size: {
      sm: {
        width: '$12',
        height: '$12',
      },
      md: {
        width: '$16',
        height: '$16',
      },
      lg: {
        width: '$20',
        height: '$20',
      },
      xl: {
        width: '$40',
        height: '$40',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  overflow: 'clip',
  overflowClipMargin: 'content-box',
  borderRadius: 'inherit',
})
export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$sky-light',
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
          width: '$12',
          height: '$12',
        },
      },
      lg: {
        svg: {
          width: '$14',
          height: '$14',
        },
      },
      xl: {
        svg: {
          width: '$28',
          height: '$28',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
