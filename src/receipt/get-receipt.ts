import { getPrice } from 'common/get-price'

import type { Basket } from 'basket/basket.type'
import type { Receipt } from 'receipt/receipt.type'

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

export { getReceipt }
