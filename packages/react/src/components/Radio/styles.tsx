import { styled } from '../../../styles'
const Input = styled('input', {
  opacity: 0,
  position: 'absolute',
  cursor: 'pointer',
})
const Container = styled('label', {
  cursor: 'pointer',
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  userSelect: 'none',
  fontSize: '$md',
  '&:hover': {
    '& span': {
      transition: 'all 250ms ease-in-out',
      backgroundColor: '$paper',
    },
  },
  '& input:checked ~ span::after': {
    display: 'block',
  },
  '& span::after': {
    top: '25%',
    left: '25%',
    width: '$3',
    height: '$3',
    borderRadius: '$full',
    background: '$surface',
  },
  variants: {
    variant: {
      primary: {
        '& input:checked ~ span': {
          backgroundColor: '$codelife-primary-700',
        },
      },
      secondary: {
        '& input:checked ~ span': {
          backgroundColor: '$codelife-secondary-700',
        },
      },
      tertiary: {
        '& input:checked ~ span': {
          backgroundColor: '$codelife-tertiary-700',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
const Mark = styled('span', {
  position: 'relative',
  height: '$6',
  width: '$6',
  borderRadius: '$full',
  backgroundColor: '$surface',
  '&::after': {
    content: '',
    position: 'absolute',
    display: 'none',
  },
})
export default { Input, Container, Mark }
