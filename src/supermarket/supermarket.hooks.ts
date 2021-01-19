import { useEffect, useState } from 'react'

import { getBasket } from 'basket/get-backet'
import { getProduct } from 'products/get-product'
import { getReceipt } from 'receipt/get-receipt'

import type { Basket } from 'basket/basket.type'
import type { Receipt } from 'receipt/receipt.type'
import type { Product } from 'products/products.type'

const useSupermarket = (products: Array<Product>) => {
  const [basket, setBasket] = useState<Array<Basket>>([])
  const [receipt, setReceipt] = useState<Receipt>()

  const addItemToBasket = (name: string): void => {
    const product = getProduct(products, name)
    if (!product) return

    const basketData = getBasket(basket, product, name)
    if (!basketData) return

    setBasket(basketData)

    const receiptData = getReceipt(basketData)
    if (!receiptData) return

    setReceipt(receiptData)
  }

  const removeItemFromBasket = (basketItem: Basket): void => {
    setBasket(basket.filter((item) => item.name !== basketItem.name))
  }

  useEffect(() => {
    const basketData = getReceipt(basket)
    if (!basketData) return

    setReceipt(getReceipt(basket))
  }, [basket])

  return {
    addItemToBasket,
    basket,
    products,
    receipt,
    removeItemFromBasket,
    setBasket,
  }
}

export { useSupermarket }
