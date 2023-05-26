import React, {
  ComponentProps,
  ElementRef,
  ElementType,
  HTMLAttributes,
  forwardRef,
} from 'react'
import * as carousel from './styles'
// import { useTransition, animated } from '@react-spring/web'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Heading } from '../Heading'
import { Box } from '../Box'
import { useCarousel } from '../../hooks/useCarousel'
import { AnimatePresence } from 'framer-motion'
// This uses any kind of data to provide a carousel transition effect
type TListItemProps<T> = {
  [key in keyof T]: T[key]
}
// For carousels with variants
type TCarouselItemProps<T> = TListItemProps<T> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
}
export type TItemComponent<T> = React.ComponentType<TCarouselItemProps<T>> &
  HTMLAttributes<HTMLElement>
// Actually this is the Carousel component type
type TCarouselRendererProps<T> = {
  items: T[]
  resourceName: string
  ItemComponent: TItemComponent<T>
  variant?: 'primary' | 'secondary' | 'tertiary'
}
type TContainerProps = ComponentProps<typeof carousel.Container> & {
  as?: ElementType
  children: React.ReactNode
}
const CarouselContainer = forwardRef<
  ElementRef<typeof carousel.Container>,
  TContainerProps
>(({ children, ...props }: TContainerProps, ref) => {
  return (
    <carousel.Container {...props} ref={ref}>
      {children}
    </carousel.Container>
  )
})
CarouselContainer.displayName = 'Carousel.Container'
export function Carousel<T>({
  items,
  resourceName,
  ItemComponent,
  variant,
}: TCarouselRendererProps<T>) {
  const {
    currentDirection,
    goToItem,
    goToNext,
    goToPrev,
    dragHandler,
    currentIndex,
  } = useCarousel(items)

  return (
    <>
      <AnimatePresence mode="wait">
        <CarouselContainer aria-labelledby={`Carousel-${resourceName}-Heading`}>
          <Heading as={'h3'} sr-only id={`Carousel-${resourceName}-Heading`}>
            {resourceName}
          </Heading>
          <carousel.InnerContainer
            data-testid="inner-container"
            direction={currentDirection}
            key={`${resourceName}-${currentIndex}`}
            onDragEnd={dragHandler}
          >
            <Box css={{ all: 'unset' }} as={'ul'}>
              <ItemComponent
                id={`panel-${currentIndex}`}
                aria-labelledby={`tab-${currentIndex}`}
                variant={variant}
                {...(items[currentIndex] as TListItemProps<T>)}
              />
            </Box>
          </carousel.InnerContainer>
          <carousel.PrevButton
            variant={variant}
            onClick={goToPrev}
            title="previous-slide"
          >
            <FaChevronLeft size={40} />
          </carousel.PrevButton>
          <carousel.NextButton
            variant={variant}
            onClick={goToNext}
            title="next-slide"
          >
            <FaChevronRight size={40} />
          </carousel.NextButton>
          <carousel.Dots
            role="tablist"
            size={items.length < 5 ? 'lg' : items.length < 10 ? 'sm' : 'md'}
          >
            {items.map((_, idx) => (
              <carousel.Dot
                size={items.length < 5 ? 'lg' : items.length < 10 ? 'md' : 'sm'}
                slot="tab"
                role="tab"
                id={`tab-${idx}`}
                aria-controls={`panel-${idx}`}
                variant={variant}
                key={idx}
                aria-selected={idx === currentIndex}
                onClick={() => goToItem(idx)}
              />
            ))}
          </carousel.Dots>
        </CarouselContainer>
      </AnimatePresence>
    </>
  )
}
