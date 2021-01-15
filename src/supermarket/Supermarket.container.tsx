import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'

import { useSupermarket } from './supoermarket.hooks'
import { Products } from 'products/Products'

const AppContainer = styled.section`
  background-color: #f9f7fc;
  height: 100vh;
`

const SupermarketContainer = () => {
  const { products } = useSupermarket()

  return (
    <AppContainer>
      <Container maxWidth="lg">Supermarket</Container>
      <Products products={products} />
    </AppContainer>
  )
}

export default SupermarketContainer
