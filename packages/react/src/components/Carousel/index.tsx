import React, {
  ComponentProps,
  ElementRef,
  ElementType,
  forwardRef,
  useCallback,
  useState,
} from 'react'
import * as carousel from './styles'
// import { useTransition, animated } from '@react-spring/web'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Heading } from '../Heading'
// This uses any kind of data to provide a carousel transition effect
type TListItemProps<T> = {
  [key in keyof T]: T[key]
}
// For carousels with variants
type TCarouselItemProps<T> = TListItemProps<T> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
}
export type TItemComponent<T> = React.ComponentType<TCarouselItemProps<T>>
// Actually this is the Carousel component type
type TCarouselRendererProps<T> = {
  items: T[]
  resourceName: string
  ItemComponent: TItemComponent<T>
  variant?: 'primary' | 'secondary' | 'tertiary' // teste
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<carousel.TDirectionX>('right')
  const goToPrev = useCallback(() => {
    setDirection('left')
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
  }, [items.length, currentIndex])
  const goToNext = useCallback(() => {
    setDirection('right')
    setCurrentIndex((currentIndex + 1) % items.length)
  }, [items.length, currentIndex])
  const goToItem = useCallback(
    (itemIndex: number) => {
      if (itemIndex === currentIndex) return
      if (itemIndex > currentIndex) {
        setDirection('right')
      }
      if (itemIndex < currentIndex) {
        setDirection('left')
      }
      setCurrentIndex(itemIndex)
    },
    [currentIndex],
  )
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }
  return (
    <>
      <CarouselContainer
        as={'section'}
        aria-labelledby={`Carousel-${resourceName}-Heading`}
      >
        <Heading as={'h3'} sr-only id={`Carousel-${resourceName}-Heading`}>
          {resourceName}
        </Heading>
        {
          <carousel.InnerContainer
            direction={direction}
            key={`${resourceName}-${currentIndex}`}
            onDragEnd={(e, { offset, velocity }) => {
              e.preventDefault()
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                goToPrev()
              } else if (swipe > swipeConfidenceThreshold) {
                goToNext()
              }
            }}
          >
            <ItemComponent
              id={`panel-${currentIndex}`}
              variant={variant}
              {...(items[currentIndex] as TListItemProps<T>)}
            />
            <carousel.PrevButton
              variant={variant}
              onClick={goToPrev}
              name="previous-slide"
            >
              <FaChevronLeft size={40} />
            </carousel.PrevButton>
            <carousel.NextButton
              variant={variant}
              onClick={goToNext}
              name="next-slide"
            >
              <FaChevronRight size={40} />
            </carousel.NextButton>
          </carousel.InnerContainer>
        }
        <carousel.Dots>
          {items.map((_, idx) => (
            <carousel.Dot
              data-slide={idx}
              variant={variant}
              key={idx}
              aria-selected={idx === currentIndex}
              onClick={() => goToItem(idx)}
            />
          ))}
        </carousel.Dots>
      </CarouselContainer>
    </>
  )
}
