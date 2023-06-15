import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Modal,
  ModalProps,
  Switch,
  Text,
  darkTheme,
  useModal,
} from '@codelife-ui/react'
import React, { useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
export default {
  title: 'Data display/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const dialogRef = useRef<HTMLDialogElement>(null)
      const { handleClose, handleOpen, isOpen } = useModal({ dialogRef })
      const [isActive, setIsActive] = useState(false)
      return (
        <>
          <Box className={isActive ? darkTheme : ''}>
            <Text as={'label'} size={'sm'} htmlFor="switchTheme">
              Switch
            </Text>
            <Switch
              CheckedIcon={FaMoon}
              UncheckedIcon={FaSun}
              onCheckedChange={() => setIsActive(!isActive)}
              isActive={isActive}
            />
            {Story({
              args: {
                ...context.args,
                isOpen,
                handleClose,
                handleOpen,
                ref: dialogRef,
                'aria-haspopup': 'true',
              },
            })}
          </Box>
        </>
      )
    },
  ],
} as Meta<ModalProps>

export const Example: StoryObj<ModalProps> = {
  args: {
    children: [
      <Button key={'test'}>The trigger Element</Button>,
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        key={'test2'}
      >
        <Text css={{ marginBlock: '$2' }}>MEU MODAL</Text>
        <Button size={'sm'}>Opa</Button>
      </Box>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'To use the modal component you need to pass two `childrens` for it.\n The first one will be the trigger element that will open the modal, and the second one will be the content of the modal.\n\n',
      },
    },
  },
}
Modal.displayName = 'Modal'
