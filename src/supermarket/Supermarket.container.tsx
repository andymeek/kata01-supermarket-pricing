import React from 'react'

import { Header } from 'components/Header/Header'
import { MainContainer } from 'components/MainContainer/MainContainer'
import { Products } from 'products/Products'
import { Basket } from 'basket/Basket'
import { Receipt } from 'receipt/Receipt'
import { useSupermarket } from './supermarket.hooks'

import { productsData } from 'products/products.data'

const SupermarketContainer = () => {
  const {
    addItemToBasket,
    basket,
    products,
    receipt,
    removeItemFromBasket,
  } = useSupermarket(productsData)

  return (
    <MainContainer>
      <Header />
      <Products onAddItemToBasket={addItemToBasket} products={products} />
      <Basket basket={basket} removeItemFromBasket={removeItemFromBasket} />
      {receipt && receipt?.basket && receipt?.basket.length > 0 && (
        <Receipt receipt={receipt} />
      )}
    </MainContainer>
  )
}

export default SupermarketContainer
