import React from 'react'
import { render, screen } from 'test-utils/test-utils'

import { Basket } from 'basket/Basket'
import { productsData } from 'products/products.data'

describe('<Basket />', () => {
  it('should display the title', () => {
    render(<Basket basket={productsData} />)

    expect(screen.getByText('Basket')).toBeInTheDocument()
  })
})
