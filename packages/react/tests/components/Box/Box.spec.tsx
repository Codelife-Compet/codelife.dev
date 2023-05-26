import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Box } from '../../../src/components/Box'
describe('testing Card component', () => {
  it('should render correctly', () => {
    render(<Box data-testid="box"></Box>)
    expect(screen.getByTestId('box')).toBeInTheDocument()
  })
})
