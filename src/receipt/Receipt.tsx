import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

import type { FC } from 'react'
import type { PropTypes } from './receipt.type'
import { formatPrice } from 'common/format-price'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '20px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const Receipt: FC<PropTypes> = ({ receipt }) => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h2" className={classes.title}>
            Receipt
          </Typography>
          {receipt.basket.map((product) => {
            return (
              <p key={product.name}>
                <strong>
                  {product.quantity} x {product.name} -{' '}
                  {formatPrice(product.price)}
                </strong>
                <br />
                {product.savings! < 0 && (
                  <>
                    <span>Promo Savings: {formatPrice(product.savings!)}</span>{' '}
                    - <small>{product.dealLabel}</small>
                  </>
                )}
              </p>
            )
          })}
          <p>---</p>
          <p>Sub-total: {formatPrice(receipt.subTotal)}</p>
          <p>Total savings: {formatPrice(receipt.totalSavings)}</p>
          <p>Total to pay: {formatPrice(receipt.totalToPay)}</p>
        </CardContent>
      </Card>
    </Container>
  )
}

export { Receipt }
