import type { Product } from 'products/products.type'

const getProduct = (products: Array<Product>, name: string) =>
  products.find(({ name: productName }) => productName === name)

export { getProduct }
