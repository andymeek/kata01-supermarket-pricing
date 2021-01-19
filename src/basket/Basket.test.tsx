import React from 'react'
import { render, screen, userEvent, waitFor } from 'test-utils/test-utils'

import { Basket } from 'basket/Basket'
import { productsData } from 'products/products.data'

describe('with basket item', () => {
  const basket = productsData
    .slice(0, 1)
    .map((b) => ({ ...b, basketPrice: b.price }))

  it('should display the basket item', () => {
    render(<Basket basket={basket} removeItemFromBasket={() => jest.fn()} />)
    expect(screen.getByText('Face masks')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('£2.50')).toBeInTheDocument()
  })

  it('receives the correct basket item when button is clicked', () => {
    const mockOnAddItemToBasket = jest.fn()

    render(
      <Basket removeItemFromBasket={mockOnAddItemToBasket} basket={basket} />
    )
    userEvent.click(screen.getByTitle('Delete Item(s)'))
    expect(mockOnAddItemToBasket).toHaveBeenCalledWith({
      basketPrice: 2.5,
      dealLabel: 'Two Face Masks for £4',
      groupPrice: 4,
      groupThreshold: 2,
      name: 'Face masks',
      price: 2.5,
      priceLabel: 'each',
      quantity: 1,
      tableData: { id: 0 },
    })
    expect(mockOnAddItemToBasket).toHaveBeenCalledTimes(1)
  })
})

describe('with no basket data', () => {
  it('should not display no items in basket', async () => {
    render(<Basket basket={[]} removeItemFromBasket={() => jest.fn()} />)

    await waitFor(() =>
      expect(screen.queryByText('No items in your basket')).toBeInTheDocument()
    )
  })
})
