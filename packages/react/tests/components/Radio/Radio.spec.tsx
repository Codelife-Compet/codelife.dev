import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Radio } from '../../../src/components/Radio'
describe('testing Checkbox component', () => {
  it('should render correctly', async () => {
    render(<Radio>Teste</Radio>)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText(/Teste/i)).toBeInTheDocument()
  })
})
