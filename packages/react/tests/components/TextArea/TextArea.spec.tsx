import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextArea } from '../../../src/components/TextArea'

describe('testing TextArea component', () => {
  it('should render correctly', () => {
    render(<TextArea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
