import React from 'react'

import Supermarket from './Supermarket.container'
import { render, screen, userEvent, waitFor } from 'test-utils/test-utils'

describe('initial load', () => {
  it('should not show the receipt heading', () => {
    render(<Supermarket />)
    expect(screen.queryByText('Receipt')).not.toBeInTheDocument()
  })
})

describe('when add item to basket button is clicked', () => {
  it('should add item to basket', async () => {
    render(<Supermarket />)

    expect(screen.getAllByText('Hand sanitizer')).toHaveLength(1)

    userEvent.click(screen.getAllByText('Add item')[2])

    await waitFor(() => expect(screen.getByText('Receipt')).toBeInTheDocument())

    expect(screen.queryAllByText('Hand sanitizer')).toHaveLength(2)
  })
})

describe('when delete item button is clicked', () => {
  it('should remove item from basket', async () => {
    render(<Supermarket />)

    expect(screen.getAllByText('Hand sanitizer')).toHaveLength(1)

    userEvent.click(screen.getAllByText('Add item')[2])

    await waitFor(() =>
      expect(screen.queryAllByText('Hand sanitizer')).toHaveLength(2)
    )

    userEvent.click(screen.getAllByTitle('Delete Item(s)')[0])

    await waitFor(() =>
      expect(screen.getAllByText('Hand sanitizer')).toHaveLength(1)
    )
  })
})
