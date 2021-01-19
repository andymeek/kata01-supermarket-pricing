import type { Product } from 'products/products.type'
import type { Basket } from 'basket/basket.type'

const getBasket = (basket: Array<Basket>, product: Product, name: string) => {
  const basketData = [...basket]
  const foundIndex = basketData.findIndex(
    ({ name: productName }) => productName === name
  )

  if (foundIndex === -1)
    basketData.push({
      ...product,
      basketPrice: product.price,
      quantity: 1,
    })
  else {
    basketData[foundIndex].quantity += 1
    basketData[foundIndex].basketPrice += basketData[foundIndex].price
  }

  return basketData
}

export { getBasket }
