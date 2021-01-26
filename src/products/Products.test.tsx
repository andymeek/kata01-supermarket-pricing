import React from 'react'
import { render, screen, userEvent } from 'test-utils/test-utils'
import { Products } from './Products'
import { productsData } from './products.data'

const products = productsData.slice(0, 1)

describe('with product data', () => {
  it('should display the products', () => {
    const mockOnAddItemToBasket = jest.fn()

    render(
      <Products onAddItemToBasket={mockOnAddItemToBasket} products={products} />
    )

    expect(screen.getByText('Face masks')).toBeInTheDocument()
    expect(screen.getByText('(each)')).toBeInTheDocument()
    expect(screen.getByText('£2.50')).toBeInTheDocument()
    expect(screen.getByText('Add item')).toBeInTheDocument()
  })

  it('receives the correct basket item when button is clicked', () => {
    const mockOnAddItemToBasket = jest.fn()

    render(
      <Products onAddItemToBasket={mockOnAddItemToBasket} products={products} />
    )
    userEvent.click(screen.getAllByText('Add item')[0])
    expect(mockOnAddItemToBasket).toHaveBeenCalledWith('Face masks')
    expect(mockOnAddItemToBasket).toHaveBeenCalledTimes(1)
  })
})

describe('with no product data', () => {
  it('should not display the products', () => {
    const mockOnAddItemToBasket = jest.fn()

    render(<Products onAddItemToBasket={mockOnAddItemToBasket} products={[]} />)

    expect(screen.queryByText('Face masks')).not.toBeInTheDocument()
    expect(screen.queryByText('(each)')).not.toBeInTheDocument()
    expect(screen.queryByText('£2.50')).not.toBeInTheDocument()
    expect(screen.queryByText('Add item')).not.toBeInTheDocument()
  })
})
