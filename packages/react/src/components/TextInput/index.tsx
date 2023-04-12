import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
      </TextInputContainer>
    )
  },
)
TextInput.displayName = 'TextInput'
