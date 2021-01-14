import Container from '@material-ui/core/Container'
import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.section`
  background-color: #f9f7fc;
  height: 100vh;
`

function Supermarket() {
  return (
    <AppContainer>
      <Container maxWidth="lg">Supermarket</Container>
    </AppContainer>
  )
}

export default Supermarket
