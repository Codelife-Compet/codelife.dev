import { describe, expect, it } from 'vitest'
import { Heading } from '../../../src/components/Heading'
import { render, screen } from '@testing-library/react'

describe('testing Card component', () => {
  it('should render correctly', () => {
    render(<Heading>Testing Headings</Heading>)
    expect(screen.getByText(/Testing Headings/i)).toBeInTheDocument()
  })
})
