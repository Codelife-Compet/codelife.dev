import React, { ElementType } from 'react'
import { styled } from '../../../styles'
import { motion } from 'framer-motion'
import { InnerContainerAnimationVariants } from '../../hooks/useCarousel'
export const Container = styled('div', {
  all: 'unset',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 1s ',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
export const SlideshowButton = styled(motion.button, {
  position: 'absolute',
  width: '$10',
  height: '$10',
  top: '50%',
  borderRadius: '$full',
  opacity: '0.6',
  border: '3px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  padding: '$1',
  display: 'flex',
  justifyItems: 'center',
  transition: 'opacity 0.3s',
  '&:hover,&:focus': {
    opacity: '0.8',
  },
  svg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$codelife-primary-300',
        '&:hover,&:focus': {
          borderColor: ' $codelife-primary-900',
        },
        svg: {
          fill: '$codelife-primary-700',
        },
      },
      secondary: {
        backgroundColor: '$codelife-secondary-300',
        svg: {
          fill: '$codelife-secondary-700',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-secondary-900',
        },
      },
      tertiary: {
        backgroundColor: '$codelife-tertiary-300',
        svg: {
          fill: '$codelife-tertiary-700',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-tertiary-900',
        },
      },
    },
  },
})

const StyledPrevButton = styled(SlideshowButton, {
  left: '$2',
})

const StyledNextButton = styled(SlideshowButton, {
  right: '$2',
})

export const Dots = styled('div', {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  justifyItems: 'center',
  variants: {
    size: {
      sm: {
        gap: '$2',
        paddingBlock: '$2',
      },
      md: {
        gap: '$4',
        paddingBlock: '$4',
      },
      lg: {
        gap: '$5',
        paddingBlock: '$5',
      },
    },
  },
})
export const Dot = styled('button', {
  all: 'unset',
  display: 'inline-block',
  borderRadius: '$full',
  border: '2px solid transparent',
  cursor: 'pointer',
  backgroundColor: '$surface',
  '&:hover': {
    cursor: 'pointer',
  },
  '&:not([aria-selected=true]):hover,&:not([aria-selected=true]):focus': {
    scale: 1.2,
  },
  '&[aria-selected=true]': {
    scale: 1.4,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
  variants: {
    size: {
      sm: {
        height: '$2',
        width: '$2',
        borderWidth: '1px',
      },
      md: {
        height: '$3',
        width: '$3',
      },
      lg: {
        height: '$4',
        width: '$4',
      },
    },
    variant: {
      primary: {
        '&[aria-selected=true],&:not([aria-selected=true]):hover': {
          backgroundColor: '$codelife-primary-500',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-primary-900',
        },
      },
      secondary: {
        '&[aria-selected=true],&:not([aria-selected=true]):hover': {
          backgroundColor: '$codelife-secondary-500',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-secondary-900',
        },
      },
      tertiary: {
        '&[aria-selected=true],&:not([aria-selected=true]):hover': {
          backgroundColor: '$codelife-tertiary-500',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-tertiary-900',
        },
      },
    },
  },
})
const InnerContainerDiv = styled(motion.ul, {
  all: 'unset',
  listStyle: 'none',
  position: 'relative',
})
export type TDirectionX = 'right' | 'left'
interface InnerContainerProps
  extends React.ComponentProps<typeof InnerContainerDiv> {
  direction: TDirectionX
  as?: ElementType
}
interface ButtonProps
  extends React.ComponentProps<
    typeof StyledNextButton | typeof StyledPrevButton
  > {}

export const PrevButton = (props: ButtonProps) => {
  return <StyledPrevButton {...props}>{props.children}</StyledPrevButton>
}
export const NextButton = (props: ButtonProps) => {
  return <StyledNextButton {...props}>{props.children}</StyledNextButton>
}
export const InnerContainer = ({
  direction,
  children,
  ...props
}: InnerContainerProps) => {
  return (
    <InnerContainerDiv
      as={props.as}
      custom={direction}
      variants={InnerContainerAnimationVariants}
      initial={'enter'}
      animate={'center'}
      exit={'exit'}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      {...props}
    >
      {children}
    </InnerContainerDiv>
  )
}
