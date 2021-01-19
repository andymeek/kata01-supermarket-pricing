type Product = {
  readonly dealLabel?: string
  readonly groupPrice?: number
  readonly groupThreshold?: number
  readonly name: string
  readonly price: number
  readonly priceLabel: string
  quantity: number
}

type PropTypes = {
  onAddItemToBasket: (name: string) => void
  products: Array<Product>
}

export type { Product, PropTypes }
