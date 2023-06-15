import { ComponentProps, ElementType } from 'react'
import { styled, darkTheme } from '../../../styles'
import { motion } from 'framer-motion'

export const Dialog = styled('dialog', {
  background: 'transparent',
  border: 0,
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
export const Trigger = styled('div', {})
export type TriggerProps = ComponentProps<typeof Trigger> & {
  as?: ElementType
}
Trigger.displayName = 'Trigger'
export const Content = styled(motion.div, {
  position: 'relative',
  border: 0,
})
export const CloseButton = styled('button', {
  border: 0,
  position: 'absolute',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  right: '$2',
  top: '$2',
  opacity: 0.8,
  '&:is(:hover,:active)': {
    svg: {
      opacity: 1,
    },
  },
  svg: {
    width: '$6',
    height: '$6',
    color: '$codelife-danger-500',
  },
})
