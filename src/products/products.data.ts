import type { Product } from './products.type'

const productsData: Array<Product> = [
  {
    name: 'Face masks',
    price: 2.5,
    priceLabel: 'each',
    groupPrice: 4.0,
    groupThreshold: 2,
    // quantity: 1,
  },
  {
    name: 'Toilet paper',
    price: 0.65,
    priceLabel: 'per roll',
    groupPrice: 3.25,
    groupThreshold: 6,
  },
  {
    name: 'Hand sanitizer',
    price: 19.99,
    priceLabel: 'per litre',
  },
]

export { productsData }
