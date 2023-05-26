import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextInput } from '../../../src/components/TextInput'
describe('testing Text Input component', () => {
  it('should render correctly', () => {
    render(<TextInput data-testid="text-input" />)
    expect(screen.getByTestId('text-input')).toBeInTheDocument()
  })
  it('should render prefix when its provided', () => {
    render(<TextInput data-testid="text-input" prefix="my prefix" />)
    expect(screen.getByTestId('text-input')).toBeInTheDocument()
    expect(screen.getByText(/my prefix/i)).toBeInTheDocument()
  })
})
