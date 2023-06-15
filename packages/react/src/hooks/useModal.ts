import { MutableRefObject, useCallback, useEffect, useState } from 'react'
type useModalProps = {
  dialogRef: MutableRefObject<HTMLDialogElement | null>
}
export function useModal({ dialogRef }: useModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close()
      setIsOpen(false)
    }
  }, [dialogRef])
  const handleOpen = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      setIsOpen(true)
    }
  }, [dialogRef])
  const handleClickOutsideModal = useCallback(
    (e: MouseEvent) => {
      if (dialogRef.current) {
        const dialogDimensions = dialogRef.current.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialogRef.current.close()
          setIsOpen(false)
        }
      }
    },
    [dialogRef],
  )
  useEffect(() => {
    const currentRef = dialogRef.current
    currentRef?.addEventListener('click', handleClickOutsideModal)
    return () => {
      currentRef?.removeEventListener('click', handleClickOutsideModal)
    }
  }, [handleClickOutsideModal, dialogRef])
  return { isOpen, handleClose, handleOpen }
}
