import { CheckBoxContainer, CheckboxIndicator } from './styles'
import { FaCheck } from 'react-icons/fa'
import { ComponentProps } from 'react'
export type CheckboxProps = ComponentProps<typeof CheckBoxContainer>

function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckboxIndicator asChild={true}>
        <FaCheck fontWeight={'bold'} />
      </CheckboxIndicator>
    </CheckBoxContainer>
  )
}

export { Checkbox }
