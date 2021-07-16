import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: blue;
`

export const MySpecialComponent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <Wrapper>Oh hi {children}</Wrapper>
}
