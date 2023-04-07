import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  border: '0 solid $codelife-black-900',
  outline: '0 solid transparent',
  variants: {
    size: {
      sm: {
        width: '$14',
        height: '$14',
        borderWidth: '2px',
        outlineWidth: '1px',
      },
      md: {
        width: 'calc(2*$14)',
        height: 'calc(2*$14)',
        borderWidth: '4px',
        outlineWidth: '2px',
      },
      lg: {
        width: 'calc(4*$14)',
        height: 'calc(4*$14)',
        borderWidth: '8px',
        outlineWidth: '4px',
      },
      xl: {
        width: 'calc(6*$14)',
        height: 'calc(6*$14)',
        borderWidth: '12px',
        outlineWidth: '6px',
      },
    },
    theme: {
      regular: {
        outlineColor: '$codelife-gray-900',
      },
      moderator: {
        outlineColor: '$codelife-tertiary-900',
      },
      owner: {
        outlineColor: '$codelife-primary-900',
      },
      contributor: {
        outlineStyle: 'solid',
        outlineColor: '$codelife-secondary-900',
      },
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
