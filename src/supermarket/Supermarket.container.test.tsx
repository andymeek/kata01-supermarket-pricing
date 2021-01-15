import React from 'react'
import { render } from 'test-utils/test-utils'

import Supermarket from './Supermarket.container'

test('renders supermarket text', () => {
  const { getByText } = render(<Supermarket />)
  const content = getByText(/Supermarket/i)
  expect(content).toBeInTheDocument()
})
