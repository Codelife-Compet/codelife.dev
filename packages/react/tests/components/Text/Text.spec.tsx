import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Text } from '../../../src/components/Text'
describe('testing Text component', () => {
  it('should render correctly', () => {
    render(<Text>Testing containers</Text>)
    expect(screen.getByText(/Testing containers/i)).toBeInTheDocument()
  })
})
