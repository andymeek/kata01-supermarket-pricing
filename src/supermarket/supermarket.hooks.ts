import { useEffect, useState } from 'react'

import type { Basket } from 'basket/Basket.types'
import type { Receipt } from 'receipt/receipt.types'
import type { Product } from 'products/products.types'

const getProduct = (products: Array<Product>, name: string) =>
  products.find(({ name: productName }) => productName === name)

const getBasket = (basket: Array<Basket>, product: Product, name: string) => {
  const basketData = [...basket]
  const foundIndex = basketData.findIndex(
    ({ name: productName }) => productName === name
  )

  if (foundIndex === -1)
    basketData.push({
      ...product,
      basketPrice: product.price,
      quantity: 1,
    })
  else {
    basketData[foundIndex].quantity += 1
    basketData[foundIndex].basketPrice += basketData[foundIndex].price
  }

  return basketData
}

const getReceipt = (basket: Array<Basket>): Receipt => {
  let totalSavings = 0

  const receipt = {
    basket: basket.map((item) => {
      const priceWithSavings =
        item.groupThreshold &&
        item.groupPrice &&
        getPrice(
          item.quantity,
          item.groupThreshold,
          item.price,
          item.groupPrice
        )

      const savings = priceWithSavings ? priceWithSavings - item.basketPrice : 0

      totalSavings += savings

      return {
        ...item,
        priceWithSavings,
        savings,
      }
    }),
    subTotal: basket.reduce((sum, item) => sum + item.basketPrice, 0),
    totalSavings,
    totalToPay: 0,
  }

  return {
    ...receipt,
    totalToPay: receipt.subTotal - -receipt.totalSavings,
  }
}

const getPrice = (
  qty: number,
  groupQty: number,
  individualPrice: number,
  groupPrice: number
): number => {
  const groupCount = Math.floor(qty / groupQty)
  const individualCount = qty % groupQty

  return groupCount * groupPrice + individualCount * individualPrice
}

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
