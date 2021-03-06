import type { Product } from 'products/products.type'

type Basket = Product & {
  basketPrice: number
  dealLabel?: string
  priceWithSavings?: number
  savings?: number
}

type PropTypes = {
  basket: Array<Basket>
  removeItemFromBasket: (basketItem: Basket) => void
}

export type { Basket, PropTypes }
