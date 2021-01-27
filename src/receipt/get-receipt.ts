import { getPrice } from 'common/get-price'

import type { Basket } from 'basket/basket.type'
import type { Receipt } from 'receipt/receipt.type'
import { Product } from 'products/products.type'

const getPriceWithSavings = (item: Product): number | undefined => {
  if (item.groupPrice && item.groupThreshold)
    return getPrice(
      item.quantity,
      item.groupThreshold,
      item.price,
      item.groupPrice
    )
}

const getReceipt = (basket: Array<Basket>): Receipt => {
  const receipt = {
    basket: basket.map((item) => {
      const priceWithSavings = getPriceWithSavings(item)
      const savings = priceWithSavings ? priceWithSavings - item.basketPrice : 0

      return {
        ...item,
        priceWithSavings,
        savings,
      }
    }),
    subTotal: basket.reduce((sum, item) => sum + item.basketPrice, 0),
  }

  const totalSavings = receipt.basket.reduce(
    (sum, item) => sum + item.savings,
    0
  )

  return {
    ...receipt,
    totalToPay: receipt.subTotal - -totalSavings,
    totalSavings,
  }
}

export { getReceipt }
