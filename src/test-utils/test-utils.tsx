import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'

import theme from 'theme/theme'

type Props = {
  children: React.ReactNode
}

const AllTheProviders = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
