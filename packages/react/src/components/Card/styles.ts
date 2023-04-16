import { styled } from '../../../styles'
import { Box } from '../Box'

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  gap: '$4',
  '@tabletLandscape': {
    display: 'grid',
    gridTemplateRows: '2fr, 1fr',
    gridAutoFlow: 'row',
    alignItems: 'center',
    justifyItems: 'center',
  },
})
export const IconContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$2',
  borderRadius: '$full',
  overflow: 'hidden',
  height: '$8',
  width: '$8',
  color: '$codelife-black-100',
  '@tabletLandscape': {
    height: '$12',
    width: '$12',
    padding: '$4',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
})
export const Root = styled(Box, {
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  paddingBlock: '$6',
  paddingInline: '$6',
  minWidth: '$64',
  width: '100%',
  '@tabletLandscape': {
    minHeight: '$80',
    maxWidth: '$80',
    justifyContent: 'space-evenly',
  },
  gap: '$4',
  variants: {
    variant: {
      primary: {
        [`& ${IconContainer}`]: {
          backgroundColor: '$codelife-primary-700',
        },
      },
      secondary: {
        [`& ${IconContainer}`]: {
          backgroundColor: '$codelife-secondary-700',
        },
      },
      tertiary: {
        [`& ${IconContainer}`]: {
          backgroundColor: '$codelife-tertiary-700',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
