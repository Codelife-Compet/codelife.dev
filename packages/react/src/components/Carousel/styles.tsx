import React, { ElementType } from 'react'
import { styled } from '../../../styles'
import { AnimatePresence, motion } from 'framer-motion'
export const Container = styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 1s ',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
          borderColor: '$codelife-secondary-900',
        },
      },
    },
  },
})

const StyledPrevButton = styled(SlideshowButton, {
  left: '$4',
})

const StyledNextButton = styled(SlideshowButton, {
  right: '$4',
})

export const Dots = styled('div', {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  justifyItems: 'center',
  gap: '$4',
  paddingBlockStart: '$4',
})
export const Dot = styled('button', {
  all: 'unset',
  display: 'inline-block',
  height: '$4',
  width: '$4',
  borderRadius: '$full',
  border: '3px solid transparent',
  cursor: 'pointer',
  backgroundColor: '$surface',
  '&:not([aria-selected=true]):hover': {
    scale: 1.2,
  },
  '&[aria-selected=true]': {
    height: '$5',
    width: '$5',
  },
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: {
        '&[aria-selected=true]': {
          backgroundColor: '$codelife-primary-500',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-primary-900',
        },
      },
      secondary: {
        '&[aria-selected=true]': {
          backgroundColor: '$codelife-secondary-500',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-secondary-900',
        },
      },
      tertiary: {
        '&[aria-selected=true]': {
          backgroundColor: '$codelife-tertiary-500',
        },
        '&:hover,&:focus': {
          borderColor: '$codelife-tertiary-900',
        },
      },
    },
  },
})
const InnerContainerDiv = styled(motion.div, {
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
const InnerContainerAnimationVariants = {
  enter: (direction: TDirectionX) => {
    return {
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0,
    }
  },
  center: {
    zindex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: TDirectionX) => {
    return {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
    }
  },
}

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
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  )
}
