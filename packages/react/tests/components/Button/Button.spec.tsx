import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../../../src/components/Button'

describe('Button test', () => {
  it('should render correctly', () => {
    render(<Button>Testing</Button>)
    const button = screen.getByText(/Testing/i)
    expect(button).toBeInTheDocument()
  })
})
