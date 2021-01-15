import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'theme/theme'
import SupermarketContainer from 'supermarket/Supermarket.container'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SupermarketContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
