import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Socials } from '../../../src/components/Socials'
import { FaGithub } from 'react-icons/fa'
describe('testing Socials component', () => {
  it('should render correctly', () => {
    render(
      <Socials.Root data-testId="socials">
        <Socials.IconContainer link="https://github.com/bidwolf">
          <FaGithub />
        </Socials.IconContainer>
      </Socials.Root>,
    )
    expect(screen.getByTestId('socials')).toBeInTheDocument()
  })
})
