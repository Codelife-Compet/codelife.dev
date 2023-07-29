import { useModal, Box, Button, Text, Modal } from '@codelife-ui/react'
import React, { useRef } from 'react'

export const LoginForm = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const { handleClose, handleOpen, isOpen } = useModal({
    dialogRef,
  })
  return (
    <Modal
      handleClose={handleClose}
      handleOpen={handleOpen}
      ref={dialogRef}
      aria-haspopup
      isOpen={isOpen}
    >
      <p>Trigger</p>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text css={{ marginBlock: '$2' }}>MEU MODAL</Text>
        <Button size={'sm'}>Opa</Button>
      </Box>
    </Modal>
  )
}
