import React from 'react'

import { Header } from 'components/Header/Header'
import { MainContainer } from 'components/MainContainer/MainContainer'
import { Products } from 'products/Products'
import { Basket } from 'basket/Basket'
import { Receipt } from 'receipt/Receipt'
import { useSupermarket } from './supermarket.hooks'

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
