import { FC, HtmlHTMLAttributes, ReactElement } from 'react'
import { IconType } from 'react-icons'
import { styled } from '../../../styles'
export interface SocialsIconProps {
  link: string
  className?: string
  children: ReactElement<IconType>
}
type OneOrMore<T> = T | T[]
const UnstyledIconContainer: FC<SocialsIconProps> = ({
  className,
  children,
  link,
}) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div className={className}>{children}</div>
  </a>
)
const InnerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})
const IconContainer = styled(UnstyledIconContainer, {
  color: '$text-default',
  svg: {
    height: '100%',
    width: '100%',
  },
  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$10',
        height: '$10',
      },
      lg: {
        width: '$12',
        height: '$12',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

// Accepts one or more Icon Containers

export interface SocialRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: OneOrMore<ReactElement<typeof IconContainer>>
}
const Root: FC<SocialRootProps> = ({ children, ...props }) => {
  return <InnerContainer {...props}>{children}</InnerContainer>
}
IconContainer.displayName = 'Socials.IconContainer'
Root.displayName = 'Socials.Root'
export const Socials = { IconContainer, Root }
