import React from 'react'
import { styled } from '../styles'
const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$default',
  padding: '$4',
})
export default function app() {
  return (
    <>
      <Button></Button>
    </>
  )
}
