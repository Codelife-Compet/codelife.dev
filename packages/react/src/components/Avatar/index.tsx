import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from '@phosphor-icons/react'
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'sm' | 'md' | 'lg' | 'xl'
}
export const Avatar: React.FC<AvatarProps> = ({ size, ...props }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600} size={size}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
