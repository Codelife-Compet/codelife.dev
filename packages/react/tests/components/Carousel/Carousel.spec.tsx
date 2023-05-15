import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Carousel, TItemComponent } from '../../../src/components/Carousel'
describe('Carousel test', () => {
  afterEach(cleanup)
  // asserts
  type anyKindOfData = { anyKey: string; anyValue: number }
  const anyItemComponent: TItemComponent<anyKindOfData> = ({
    anyKey,
    anyValue,
    ...props
  }) => (
    <div data-testid="anyComponent" {...props}>
      <h1>{anyKey}</h1>
      <span>{anyValue}</span>
    </div>
  )
  const dummyData: anyKindOfData[] = [
    {
      anyKey: '1',
      anyValue: 1,
    },
    {
      anyKey: '2',
      anyValue: 2,
    },
    {
      anyKey: '3',
      anyValue: 3,
    },
    {
      anyKey: '4',
      anyValue: 4,
    },
  ]
  it('should be able to use any kind of data', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    expect(screen.getByTestId(/anyComponent/i)).toBeInTheDocument()
  })

  it('should have same number of indicative dots that data length', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    const slidesCount = await screen.findAllByRole('tab')
    expect(slidesCount.length).toBe(dummyData.length)
  })
  it('should have change the size of indicative when data length is greater than 4', async () => {
    const { rerender } = render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    const anotherDummyData: anyKindOfData[] = [
      {
        anyKey: '1',
        anyValue: 1,
      },
      {
        anyKey: '2',
        anyValue: 2,
      },
      {
        anyKey: '3',
        anyValue: 3,
      },
      {
        anyKey: '4',
        anyValue: 4,
      },
      {
        anyKey: '5',
        anyValue: 5,
      },
      {
        anyKey: '6',
        anyValue: 6,
      },
      {
        anyKey: '7',
        anyValue: 7,
      },
      {
        anyKey: '8',
        anyValue: 8,
      },
      {
        anyKey: '9',
        anyValue: 9,
      },
    ]
    const firstDotRedered = await screen.findAllByRole('tab')
    const firstClass = firstDotRedered[0].className
    rerender(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={anotherDummyData}
      />,
    )
    const secondDotRedered = await screen.findAllByRole('tab')
    anotherDummyData.push({ anyKey: '10', anyValue: 10 })
    const secondClass = secondDotRedered[0].className

    rerender(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={anotherDummyData}
      />,
    )
    const thirdDotRedered = await screen.findAllByRole('tab')
    const thirdClass = thirdDotRedered[0].className

    anotherDummyData.push({ anyKey: '10', anyValue: 10 })
    expect(firstClass).not.toBe(secondClass)
    expect(firstClass).not.toBe(thirdClass)
    expect(secondClass).not.toBe(thirdClass)
  })
  it('should current slide id controlled by dot indicator with aria-selected true', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    const allDots = await screen.findAllByRole('tab')
    const currentDot = allDots.find(
      (d) => d.getAttribute('aria-selected') === 'true',
    )
    const anyDataId = screen.getByTestId('anyComponent').getAttribute('id')
    expect(currentDot).toHaveAttribute('aria-controls', anyDataId)
  })
  it('should current slide change when a different dot indicator is clicked', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    const allDots = await screen.findAllByRole('tab')
    const previousId = screen.getByTestId('anyComponent').getAttribute('id')

    const differentDot = allDots.find(
      (d) => d.getAttribute('aria-selected') === 'false',
    )
    if (differentDot) fireEvent.click(differentDot)
    const currentId = screen.getByTestId('anyComponent').getAttribute('id')
    expect(differentDot).toHaveAttribute('aria-controls', currentId)
    expect(previousId).not.toBe(currentId)
  })
  it('should current slide not change when the same dot indicator is clicked', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    const allDots = await screen.findAllByRole('tab')
    const previousId = screen.getByTestId('anyComponent').getAttribute('id')

    const sameDot = allDots.find(
      (d) => d.getAttribute('aria-selected') === 'true',
    )
    if (sameDot) fireEvent.click(sameDot)
    const currentId = screen.getByTestId('anyComponent').getAttribute('id')
    expect(sameDot).toHaveAttribute('aria-controls', currentId)
    expect(previousId).toBe(currentId)
  })
  it('should current slide change when the next button is clicked', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    const previousId = screen.getByTestId('anyComponent').getAttribute('id')
    const nextButton = screen.getByTitle('next-slide')
    if (nextButton) fireEvent.click(nextButton)
    const currentId = screen.getByTestId('anyComponent').getAttribute('id')
    expect(previousId).not.toBe(currentId)
  })
  it('should current slide change when the previous button is clicked', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    // expect
    const previousId = screen.getByTestId('anyComponent').getAttribute('id')
    const previousButton = screen.getByTitle('previous-slide')
    if (previousButton) fireEvent.click(previousButton)
    const currentId = screen.getByTestId('anyComponent').getAttribute('id')
    expect(previousId).not.toBe(currentId)
  })
  it('should current slide go to previous slide when the previous button is clicked and have a previous slide', async () => {
    // act
    render(
      <Carousel
        resourceName={'anyItem'}
        ItemComponent={anyItemComponent}
        items={dummyData}
      />,
    )
    const previousButton = screen.getByTitle('previous-slide')
    const nextButton = screen.getByTitle('next-slide')
    const firstId = screen.getByTestId('anyComponent').getAttribute('id')
    fireEvent.click(nextButton)
    const secondId = screen.getByTestId('anyComponent').getAttribute('id')
    fireEvent.click(previousButton)
    const currentId = screen.getByTestId('anyComponent').getAttribute('id')
    expect(firstId).toBe(currentId)
    expect(secondId).not.toBe(currentId)
  })
})
