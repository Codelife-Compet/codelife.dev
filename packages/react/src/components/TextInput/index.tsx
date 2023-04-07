import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}
export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
