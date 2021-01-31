type Product = {
  readonly name: string
  readonly price: number
  readonly priceLabel: string
  quantity: number
}

type PropTypes = {
  onAddItemToBasket: (name: string) => void
  products: Array<Product>
}

type Discount = Record<
  string,
  {
    readonly dealLabel: string
    readonly groupPrice: number
    readonly groupThreshold: number
  }
>

export type { Discount, Product, PropTypes }
