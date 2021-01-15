type Product = {
  groupPrice?: number
  groupThreshold?: number
  name: string
  price: number
  priceLabel: string
}

type PropTypes = {
  products: Array<Product>
}

export type { Product, PropTypes }
