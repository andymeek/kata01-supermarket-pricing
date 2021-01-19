import React from 'react'

import Supermarket from './Supermarket.container'
import { render, screen, userEvent, waitFor } from 'test-utils/test-utils'

describe('initial load', () => {
  it('should not show the receipt heading', () => {
    render(<Supermarket />)
    expect(screen.queryByText('Receipt')).not.toBeInTheDocument()
  })
})

describe('when an item is added to the basket', () => {
  it('should add item to basket and receipt', async () => {
    render(<Supermarket />)

    expect(screen.getAllByText('Hand sanitizer')).toHaveLength(1)

    userEvent.click(screen.getAllByText('Add item')[2])

    await waitFor(() => expect(screen.getByText('Receipt')).toBeInTheDocument())

    expect(screen.queryAllByText(/Hand sanitizer/i)).toHaveLength(3)
  })
})

describe('when 2 items are added to the basket', () => {
  it('should add items to basket and receipt', async () => {
    render(<Supermarket />)

    expect(screen.getAllByText(/Face masks/i)).toHaveLength(1)
    expect(screen.getAllByText(/Hand sanitizer/i)).toHaveLength(1)

    userEvent.click(screen.getAllByText('Add item')[0])
    userEvent.click(screen.getAllByText('Add item')[2])

    await waitFor(() => expect(screen.getByText('Receipt')).toBeInTheDocument())

    expect(screen.queryAllByText(/Face masks/i)).toHaveLength(3)
    expect(screen.queryAllByText(/Hand sanitizer/i)).toHaveLength(3)
    expect(screen.queryByText(/Promo Savings/i)).not.toBeInTheDocument()
  })
})

describe('when a promotion is activated', () => {
  it('should add items to basket and receipt', async () => {
    render(<Supermarket />)

    expect(screen.getAllByText(/Face masks/i)).toHaveLength(1)

    userEvent.click(screen.getAllByText('Add item')[0])
    userEvent.click(screen.getAllByText('Add item')[0])

    await waitFor(() => expect(screen.getByText('Receipt')).toBeInTheDocument())

    expect(screen.getByText(/2 x Face masks - £2.50/i)).toBeInTheDocument()
    expect(screen.getByText(/Promo Savings: -£1.00/i)).toBeInTheDocument()
    expect(screen.getByText(/Sub-total: £5.00/i)).toBeInTheDocument()
    expect(screen.getByText(/Total savings: -£1.00/i)).toBeInTheDocument()
    expect(screen.getByText(/Total to pay: £4.00/i)).toBeInTheDocument()
  })
})

describe('when deleting an item', () => {
  it('should remove items from basket and receipt', async () => {
    render(<Supermarket />)

    expect(screen.getAllByText('Hand sanitizer')).toHaveLength(1)

    userEvent.click(screen.getAllByText('Add item')[2])

    await waitFor(() =>
      expect(screen.queryAllByText(/Hand sanitizer/i)).toHaveLength(3)
    )

    userEvent.click(screen.getAllByTitle('Delete Item(s)')[0])

    await waitFor(() =>
      expect(screen.queryAllByText(/Hand sanitizer/i)).toHaveLength(1)
    )
    expect(screen.queryByText(/Promo Savings/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Total to pay/i)).not.toBeInTheDocument()
  })
})
