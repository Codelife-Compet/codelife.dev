import React, { ComponentPropsWithoutRef, ReactElement } from 'react'
import {
  Root as StyledRoot,
  Header as StyledHeader,
  IconContainer as StyledIconContainer,
} from './styles'
import { HeadingProps } from '../Heading'
import { IconType } from 'react-icons'
import { TextProps } from '../Text'
type IconContainerProps = ComponentPropsWithoutRef<
  typeof StyledIconContainer
> & {
  children?: ReactElement<IconType | HTMLImageElement>
}
type HeaderProps = ComponentPropsWithoutRef<typeof StyledHeader> & {
  children: ReactElement<HeadingProps | IconContainerProps>[]
}
const Header: React.FC<HeaderProps> = ({ children, ...props }) => (
  <StyledHeader {...props}>{children}</StyledHeader>
)
const IconContainer: React.FC<IconContainerProps> = ({
  children,
  ...props
}) => <StyledIconContainer {...props}>{children}</StyledIconContainer>
export type RootProps = ComponentPropsWithoutRef<typeof StyledRoot> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
  children: ReactElement<HeadingProps | IconContainerProps | TextProps>[]
}
const Root: React.FC<RootProps> = ({ children, ...props }) => (
  <StyledRoot {...props}>{children}</StyledRoot>
)
export const Card = { Root, Header, IconContainer }
