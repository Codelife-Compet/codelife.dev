import { CheckBoxContainer, CheckboxIndicator } from './styles'
import { FaCheck } from 'react-icons/fa'
import { ComponentProps, ElementRef, forwardRef } from 'react'
export type CheckboxProps = ComponentProps<typeof CheckBoxContainer>

const Checkbox = forwardRef<
  ElementRef<typeof CheckBoxContainer>,
  CheckboxProps
>((props: CheckboxProps, ref) => {
  return (
    <CheckBoxContainer {...props} ref={ref}>
      <CheckboxIndicator asChild={true}>
        <FaCheck fontWeight={'bold'} />
      </CheckboxIndicator>
    </CheckBoxContainer>
  )
})
Checkbox.displayName = 'Checkbox'
export { Checkbox }
