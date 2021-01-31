import { getPrice } from 'common/get-price'

import type { Basket } from 'basket/basket.type'
import type { Receipt } from 'receipt/receipt.type'
import { Product } from 'products/products.type'
import { discounts } from 'products/products.data'

const getPriceWithSavings = (item: Product): number | undefined => {
  if (discounts[item.name])
    return getPrice(
      item.quantity,
      discounts[item.name].groupThreshold,
      item.price,
      discounts[item.name].groupPrice
    )
}

const getReceipt = (basket: Array<Basket>): Receipt => {
  const receipt = {
    basket: basket.map((item) => {
      const priceWithSavings = getPriceWithSavings(item)
      const savings = priceWithSavings ? priceWithSavings - item.basketPrice : 0

      return {
        ...item,
        ...(priceWithSavings && { dealLabel: discounts[item.name].dealLabel }),
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
