import type { Basket } from 'basket/basket.type'

type Receipt = {
  basket: Array<Basket>
  totalSavings: number
  totalToPay: number
  subTotal: number
}

type PropTypes = {
  receipt: Receipt
}

export type { Receipt, PropTypes }
