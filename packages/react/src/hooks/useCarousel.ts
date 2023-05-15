import { useCallback, useState } from 'react'
import { TDirectionX } from '../components/Carousel/styles'
import { PanInfo } from 'framer-motion'

export const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export type TGetDragHandlerProps = {
  swipeConfidenceThreshold: number
  goToPrev: () => void
  goToNext: () => void
}

export const InnerContainerAnimationVariants = {
  enter: (direction: TDirectionX) => {
    return {
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0,
    }
  },
  center: {
    zindex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: TDirectionX) => {
    return {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
    }
  },
}

export function useCarousel<T>(items: T[]) {
  const [currentDirection, setDirection] = useState<TDirectionX>('right')
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setDirection('right')
    setCurrentIndex((currentIndex + 1) % items.length)
  }, [currentIndex, items.length])
  const goToPrev = useCallback(() => {
    setDirection('left')
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
  }, [currentIndex, items.length])
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
  const swipeConfidenceThreshold = 1000
  const dragHandler = useCallback(
    (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      e.preventDefault()
      const swipe = swipePower(info.offset.x, info.velocity.x)
      if (swipe < -swipeConfidenceThreshold) {
        goToPrev()
      } else if (swipe > swipeConfidenceThreshold) {
        goToNext()
      }
    },
    [goToNext, goToPrev],
  )
  return {
    goToItem,
    goToNext,
    goToPrev,
    dragHandler,
    currentDirection,
    currentIndex,
  }
}
