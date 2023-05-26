import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Checkbox } from '../../../src/components/Checkbox'
describe('testing Checkbox component', () => {
  it('should render correctly', async () => {
    render(<Checkbox />)
    expect(await screen.findByRole('checkbox')).toBeInTheDocument()
  })
})
