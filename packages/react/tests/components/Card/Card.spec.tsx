import { describe, expect, it } from 'vitest'
import { Card } from '../../../src/components/Card'
import { render, screen } from '@testing-library/react'
import { FaAddressBook } from 'react-icons/fa'
import { Heading } from '../../../src/components/Heading'
import { Text } from '../../../src/components/Text'
describe('testing Card component', () => {
  it('should render correctly', () => {
    render(
      <Card.Root>
        <Card.Header>
          <Card.IconContainer>
            <FaAddressBook />
          </Card.IconContainer>
          <Heading>Just testing headings</Heading>
        </Card.Header>
        <Text>Testing containers</Text>
      </Card.Root>,
    )
    expect(screen.getByText(/Testing containers/i)).toBeInTheDocument()
  })
})
