import React from 'react'
import styled from 'styled-components'

import { Header } from 'components/Header'
import { Products } from 'products/Products'
import { Basket } from 'basket/Basket'
import { Receipt } from 'receipt/Receipt'
import { useSupermarket } from './supermarket.hooks'

const MainContainer = styled.section`
  background-color: #f9f7fc;
  height: 100vh;
`

const SupermarketContainer = () => {
  const { basketItems, products } = useSupermarket()

  return (
    <MainContainer>
      <Header />
      <Products products={products} />
      <Basket basket={basketItems} />
      <Receipt />
    </MainContainer>
  )
}

export default SupermarketContainer
