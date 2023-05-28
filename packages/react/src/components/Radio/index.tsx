import StyledRadio from './styles'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
export type RadioProps = ComponentProps<typeof StyledRadio.Input> & {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
}

const Radio = forwardRef<ElementRef<typeof StyledRadio.Input>, RadioProps>(
  ({ children, variant, ...props }: RadioProps, ref) => {
    return (
      <StyledRadio.Container htmlFor={props.id} variant={variant}>
        <StyledRadio.Input {...props} type="radio" name={props.id} ref={ref} />
        <StyledRadio.Mark />
        {children}
      </StyledRadio.Container>
    )
  },
)
Radio.displayName = 'Radio'
export { Radio }
