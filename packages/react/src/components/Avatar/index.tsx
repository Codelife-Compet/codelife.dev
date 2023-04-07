import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { FaUser } from 'react-icons/fa'
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'sm' | 'md' | 'lg' | 'xl'
  theme: 'regular' | 'moderator' | 'owner' | 'contributor'
}
export const Avatar: React.FC<AvatarProps> = ({ size, theme, ...props }) => {
  return (
    <AvatarContainer size={size} theme={theme}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600} size={size}>
        <FaUser />
      </AvatarFallback>
    </AvatarContainer>
  )
}
