import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { SwitchRoot, SwitchThumb } from './styles'
import { IconType } from 'react-icons'
export type SwitchProps = ComponentProps<typeof SwitchRoot> & {
  isActive?: boolean
  CheckedIcon?: IconType
  UncheckedIcon?: IconType
}
export const Switch = forwardRef<ElementRef<typeof SwitchRoot>, SwitchProps>(
  ({ isActive = false, CheckedIcon, UncheckedIcon, size, ...props }, ref) => (
    <SwitchRoot
      checked={isActive}
      size={size}
      data-state={isActive ? 'checked' : 'unchecked'}
      {...props}
      ref={ref}
    >
      <SwitchThumb
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data-state={isActive ? 'checked' : 'unchecked'}
        size={size}
      >
        {isActive
          ? CheckedIcon && <CheckedIcon />
          : UncheckedIcon && <UncheckedIcon />}
      </SwitchThumb>
    </SwitchRoot>
  ),
)
Switch.displayName = 'Switch'
