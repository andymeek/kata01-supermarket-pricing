import React from 'react'
import { render, screen } from 'test-utils/test-utils'
import { Receipt } from 'receipt/Receipt'

describe('with one item', () => {
  const receipt = {
    basket: [
      {
        dealLabel: 'Two Face Masks for £4',
        groupPrice: 4,
        groupThreshold: 2,
        name: 'Face masks',
        price: 2.5,
        priceLabel: 'each',
        quantity: 1,
        basketPrice: 2.5,
        priceWithSavings: 2.5,
        savings: 0,
      },
    ],
    subTotal: 2.5,
    totalSavings: 0,
    totalToPay: 2.5,
  }

  it('should display the basket item', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('1 x Face masks - £2.50')).toBeInTheDocument()
  })

  it('should not display promo', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.queryByText('Promo Savings')).not.toBeInTheDocument()
  })

  it('should display the correct sub-total', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Sub-total: £2.50')).toBeInTheDocument()
  })

  it('should display the correct total savings', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Total savings: £0.00')).toBeInTheDocument()
  })

  it('should display the correct total to pay', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Total to pay: £2.50')).toBeInTheDocument()
  })
})

describe('with one promotion item', () => {
  const receipt = {
    basket: [
      {
        dealLabel: '6 rolls of toilet paper for the price of 5',
        groupPrice: 3.25,
        groupThreshold: 6,
        name: 'Toilet paper',
        price: 0.65,
        priceLabel: 'per roll',
        quantity: 6,
        basketPrice: 3.9,
        priceWithSavings: 3.25,
        savings: -0.65,
      },
    ],
    subTotal: 3.9,
    totalSavings: -0.65,
    totalToPay: 3.25,
  }
  it('should display the basket item', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('6 x Toilet paper - £0.65')).toBeInTheDocument()
  })

  it('should display correct promo', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Promo Savings: -£0.65')).toBeInTheDocument()
    expect(
      screen.getByText('6 rolls of toilet paper for the price of 5')
    ).toBeInTheDocument()
  })

  it('should display the correct sub-total', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Sub-total: £3.90')).toBeInTheDocument()
  })

  it('should display the correct total savings', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Total savings: -£0.65')).toBeInTheDocument()
  })

  it('should display the correct total to pay', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Total to pay: £3.25')).toBeInTheDocument()
  })
})

describe('with three items', () => {
  const receipt = {
    basket: [
      {
        dealLabel: '6 rolls of toilet paper for the price of 5',
        groupPrice: 3.25,
        groupThreshold: 6,
        name: 'Toilet paper',
        price: 0.65,
        priceLabel: 'per roll',
        quantity: 6,
        basketPrice: 3.9,
        priceWithSavings: 3.25,
        savings: -0.65,
      },
      {
        dealLabel: 'Two Face Masks for £4',
        groupPrice: 4,
        groupThreshold: 2,
        name: 'Face masks',
        price: 2.5,
        priceLabel: 'each',
        quantity: 2,
        basketPrice: 5,
        priceWithSavings: 4,
        savings: -1,
      },
      {
        name: 'Hand sanitizer',
        price: 3.5,
        priceLabel: '175ml @ £19.99 per litre',
        quantity: 1,
        basketPrice: 3.5,
        savings: 0,
      },
    ],
    subTotal: 12.4,
    totalSavings: -1.65,
    totalToPay: 10.75,
  }
  it('should display the basket items', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('6 x Toilet paper - £0.65')).toBeInTheDocument()
    expect(screen.getByText('2 x Face masks - £2.50')).toBeInTheDocument()
    expect(screen.getByText('1 x Hand sanitizer - £3.50')).toBeInTheDocument()
  })

  it('should display correct promos', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Promo Savings: -£0.65')).toBeInTheDocument()
    expect(
      screen.getByText('6 rolls of toilet paper for the price of 5')
    ).toBeInTheDocument()
    expect(screen.getByText('Promo Savings: -£1.00')).toBeInTheDocument()
    expect(screen.getByText('Two Face Masks for £4')).toBeInTheDocument()
  })

  it('should display the correct sub-total', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Sub-total: £12.40')).toBeInTheDocument()
  })

  it('should display the correct total savings', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Total savings: -£1.65')).toBeInTheDocument()
  })

  it('should display the correct total to pay', () => {
    render(<Receipt receipt={receipt} />)

    expect(screen.getByText('Total to pay: £10.75')).toBeInTheDocument()
  })
})
