import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { FaUser } from 'react-icons/fa'
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'sm' | 'md' | 'lg' | 'xl'
}
export const Avatar: React.FC<AvatarProps> = ({ size, ...props }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600} size={size}>
        <FaUser />
      </AvatarFallback>
    </AvatarContainer>
  )
}
