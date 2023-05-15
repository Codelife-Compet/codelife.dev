import { describe, vi } from 'vitest'
import {
  swipePower,
  InnerContainerAnimationVariants,
  useCarousel,
} from '../../../src/hooks/useCarousel'
import { PanInfo } from 'framer-motion'
import { act, renderHook } from '@testing-library/react-hooks'
describe('test useCarousel hook', () => {
  type TMockItem = {
    name: string
  }
  const mockItem: TMockItem[] = [
    {
      name: 'Rick',
    },
    {
      name: 'Fred',
    },
    {
      name: 'Bryan',
    },
    {
      name: 'Louis',
    },
    {
      name: 'Francis',
    },
  ]
  it('should animation enter from 100% when your direction is left', () => {
    const enter = InnerContainerAnimationVariants.enter
    const direction = 'left'
    expect(enter(direction).x).toBe('100%')
  })
  it('should animation enter from -100% when your direction is right', () => {
    const enter = InnerContainerAnimationVariants.enter
    const direction = 'right'
    expect(enter(direction).x).toBe('-100%')
  })
  it('should animation exit to 100% when your direction is left', () => {
    const exit = InnerContainerAnimationVariants.exit
    const direction = 'left'
    expect(exit(direction).x).toBe('-100%')
  })
  it('should animation exit to -100% when your direction is right', () => {
    const exit = InnerContainerAnimationVariants.exit
    const direction = 'right'
    expect(exit(direction).x).toBe('100%')
  })
  it('should be able to calc the swipePower', () => {
    const offset = 200
    const velocity = 1
    expect(swipePower(offset, velocity)).toBe(200)
    expect(swipePower(offset, 2 * velocity)).toBe(400)
    expect(swipePower(offset, -2 * velocity)).toBe(-400)
    expect(swipePower(-2 * offset, velocity)).toBe(400)
  })
  it('should go to next when the swipePower is greater than 1000', () => {
    const event: MouseEvent | TouchEvent | PointerEvent = {
      preventDefault: vi.fn(),
    } as any
    const info = {
      offset: { x: 1001, y: 0 },
      velocity: { x: 1, y: 0 },
      delta: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
    } as PanInfo
    const { result } = renderHook(() => useCarousel<TMockItem>(mockItem))

    expect(result.current.currentIndex).toBe(0)

    act(() => {
      result.current.dragHandler(event, info)
    })

    expect(event.preventDefault).toBeCalledTimes(1)
    expect(result.current.currentIndex).toBe(1)
  })
  it('should go to next when the swipePower is minor than -1000', () => {
    const event: MouseEvent | TouchEvent | PointerEvent = {
      preventDefault: vi.fn(),
    } as any
    const info = {
      offset: { x: -1001, y: 0 },
      velocity: { x: -1, y: 0 },
      delta: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
    } as PanInfo
    const { result } = renderHook(() => useCarousel<TMockItem>(mockItem))

    expect(result.current.currentIndex).toBe(0)

    act(() => {
      result.current.dragHandler(event, info)
    })

    expect(event.preventDefault).toBeCalledTimes(1)
    expect(result.current.currentIndex).toBe(mockItem.length - 1)
  })
  it('should be able to go to the left direction when go to previous item', async () => {
    const { result } = renderHook(() => useCarousel<TMockItem>(mockItem))
    const { currentIndex } = result.current

    expect(result.current.currentDirection).toBe('right')
    expect(result.current.currentIndex).toBe(0)
    act(() => {
      result.current.goToItem(currentIndex - 1)
    })
    expect(result.current.currentDirection).toBe('left')
    act(() => {
      result.current.goToPrev()
    })
    expect(result.current.currentDirection).toBe('left')
  })
  it('should be able to go to the right direction when go to next item', () => {
    const { result } = renderHook(() => useCarousel<TMockItem>(mockItem))
    act(() => {
      result.current.goToNext()
    })
    expect(result.current.currentDirection).toBe('right')

    act(() => {
      result.current.goToItem(result.current.currentIndex + 1)
    })
    expect(result.current.currentDirection).toBe('right')
  })
  it('should not be able to change the direction when the current index is equal to the selected item index', () => {
    const { result } = renderHook(() => useCarousel<TMockItem>(mockItem))
    const { currentIndex, currentDirection } = result.current
    act(() => {
      result.current.goToItem(currentIndex)
    })
    expect(result.current.currentDirection).toBe(currentDirection)
  })
  it('should be able to go to last item in goToPrev when the current index is 0', () => {
    const { result } = renderHook(() => useCarousel<TMockItem>(mockItem))
    expect(result.current.currentIndex).toBe(0)
    act(() => {
      result.current.goToPrev()
    })
    expect(result.current.currentIndex).toBe(mockItem.length - 1)
  })
})
