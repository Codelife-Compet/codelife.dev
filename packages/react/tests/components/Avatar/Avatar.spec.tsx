import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '../../../src/components/Avatar'

describe('testing Avatar component', () => {
  it('should render correctly', () => {
    render(
      <Avatar
        src="https://github.com/bidwolf.png"
        alt="just a test man"
        size="md"
        theme="contributor"
      />,
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
