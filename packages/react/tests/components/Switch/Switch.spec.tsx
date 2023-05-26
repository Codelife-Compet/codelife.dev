import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Switch } from '../../../src/components/Switch'
import { IconType } from 'react-icons'
describe('testing Switch component', () => {
  const mockUncheckedIcon: IconType = () => (
    <img
      data-testid="uncheckedIcon"
      src="https://github.com/bidwolf.png"
      alt="just a test icon"
    />
  )
  const mockCheckedIcon: IconType = () => (
    <img
      data-testid="checkedIcon"
      src="https://github.com/bidwolf.png"
      alt="just a test icon"
    />
  )
  it('should render correctly', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })
  it('should show the unchecked icon when the switch button is not active', async () => {
    render(
      <Switch
        UncheckedIcon={mockUncheckedIcon}
        CheckedIcon={mockCheckedIcon}
      />,
    )
    expect(screen.getByTestId('uncheckedIcon')).toBeInTheDocument()
  })
  it('should show the checked icon when the switch button is active', async () => {
    render(
      <Switch
        UncheckedIcon={mockUncheckedIcon}
        CheckedIcon={mockCheckedIcon}
        isActive={true}
      />,
    )
    expect(screen.getByTestId('checkedIcon')).toBeInTheDocument()
  })
})
