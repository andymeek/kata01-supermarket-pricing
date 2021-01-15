import { useState } from 'react'
import { productsData } from 'products/products.data'
import type { Product } from 'products/products.type'

const useSupermarket = () => {
  const [basketItems, setBasketItems] = useState<Array<Product>>([])

  return { basketItems, products: productsData, setBasketItems }
}

export { useSupermarket }
