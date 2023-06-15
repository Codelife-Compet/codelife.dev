import {
  Children,
  ComponentProps,
  ElementRef,
  ReactNode,
  forwardRef,
} from 'react'
import { CloseButton, Content, Dialog, Trigger } from './styles'
import { AnimatePresence, Variants } from 'framer-motion'
import { FiX } from 'react-icons/fi'
export type ModalProps = ComponentProps<typeof Dialog> & {
  children: ReactNode
  handleOpen: () => void
  handleClose: () => void
  isOpen?: boolean
}

export const Modal = forwardRef<ElementRef<typeof Dialog>, ModalProps>(
  ({ children, handleClose, handleOpen, isOpen, ...props }, ref) => {
    const [trigger, content] = Children.toArray(children)
    const dropInAnimationVariants: Variants = {
      hidden: {
        opacity: 0,
        y: '100vh',
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          duration: 0.1,
          damping: 120,
          stiffness: 500,
        },
      },
      exit: {
        opacity: 0,
        y: '-100vh',
      },
    }
    return (
      <AnimatePresence mode="wait" initial={false}>
        <Trigger onClick={handleOpen}>{trigger}</Trigger>
        <Dialog {...props} ref={ref}>
          {isOpen && (
            <Content
              aria-hidden={!isOpen}
              variants={dropInAnimationVariants}
              initial="hidden"
              exit={'exit'}
              animate="visible"
            >
              <CloseButton onClick={handleClose} title="close" type="button">
                <FiX />
              </CloseButton>
              {content}
            </Content>
          )}
        </Dialog>
      </AnimatePresence>
    )
  },
)
Modal.displayName = 'Modal'
