import type { Discount, Product } from './products.type'

const products: Array<Product> = [
  {
    name: 'Face masks',
    price: 2.5,
    priceLabel: 'each',
    quantity: 1,
  },
  {
    name: 'Toilet paper',
    price: 0.65,
    priceLabel: 'per roll',
    quantity: 1,
  },
  {
    name: 'Hand sanitizer',
    price: 3.5,
    priceLabel: '175ml @ £19.99 per litre',
    quantity: 1,
  },
]

const discounts: Discount = {
  'Face masks': {
    dealLabel: 'Two Face Masks for £4',
    groupPrice: 4.0,
    groupThreshold: 2,
  },
  'Toilet paper': {
    dealLabel: '6 rolls of toilet paper for the price of 5',
    groupPrice: 3.25,
    groupThreshold: 6,
  },
}

export { products, discounts }
