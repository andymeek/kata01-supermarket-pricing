import React from 'react'
import { render, screen } from 'test-utils/test-utils'
import { Receipt } from 'receipt/Receipt'

describe('<Receipt />', () => {
  it('should display the title', () => {
    render(<Receipt />)

    expect(screen.getByText('Receipt')).toBeInTheDocument()
  })
})
