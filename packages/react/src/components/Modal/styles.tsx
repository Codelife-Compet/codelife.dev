import { ComponentProps, ElementType } from 'react'
import { styled, darkTheme } from '../../../styles'
import { motion } from 'framer-motion'

export const Dialog = styled('dialog', {
  background: 'transparent',
  overflow: 'hidden',
  '&::backdrop': {
    background: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(3px)',
  },
  [`.${darkTheme} &`]: {
    '&::backdrop': {
      background: 'rgba(255,255,255,0.2)',
    },
  },
})
export const Trigger = styled('button', {})
export type TriggerProps = ComponentProps<typeof Trigger> & {
  as?: ElementType
}
Trigger.displayName = 'Trigger'
export const Content = styled(motion.div, {
  position: 'relative',
})
export const CloseButton = styled('button', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$6',
  height: '$6',
  right: '$3',
  top: '$3',
  opacity: 0.8,
  '&:is(:hover,:active)': {
    svg: {
      opacity: 1,
    },
  },
  svg: {
    width: '100%',
    height: '100%',
    color: '$codelife-danger-500',
  },
})
