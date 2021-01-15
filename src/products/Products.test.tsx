import React from 'react'
import { render, screen } from 'test-utils/test-utils'
import { Products } from './Products'
import { productsData } from './products.data'

describe('<Products />', () => {
  describe('when provided with product data', () => {
    it('should display the product list', () => {
      render(<Products products={productsData} />)

      expect(screen.getByText('Face masks')).toBeInTheDocument()
      expect(screen.getByText('(each)')).toBeInTheDocument()
      expect(screen.getByText('£2.50')).toBeInTheDocument()

      expect(screen.getByText('Toilet paper')).toBeInTheDocument()
      expect(screen.getByText('(per roll)')).toBeInTheDocument()
      expect(screen.getByText('£0.65')).toBeInTheDocument()

      expect(screen.getByText('Hand sanitizer')).toBeInTheDocument()
      expect(screen.getByText('(per litre)')).toBeInTheDocument()
      expect(screen.getByText('£19.99')).toBeInTheDocument()
    })
  })
})
