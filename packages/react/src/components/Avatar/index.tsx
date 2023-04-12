import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { FaUser } from 'react-icons/fa'
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'sm' | 'md' | 'lg' | 'xl'
  theme: 'regular' | 'moderator' | 'owner' | 'contributor'
}
export const Avatar = forwardRef<
  ElementRef<typeof AvatarContainer>,
  AvatarProps
>(({ size, theme, ...props }, ref) => {
  return (
    <AvatarContainer size={size} theme={theme} ref={ref}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600} size={size}>
        <FaUser />
      </AvatarFallback>
    </AvatarContainer>
  )
})
Avatar.displayName = 'Avatar'
