import React from 'react'
import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import Container from '@material-ui/core/Container'

import { formatPrice } from 'common/format-price'

import type { FC } from 'react'
import type { PropTypes } from './products.types'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '20px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const ProductContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 400px 1fr;
`

const Products: FC<PropTypes> = ({ onAddItemToBasket, products }) => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h2" className={classes.title}>
            Products
          </Typography>
          {products.map((product) => {
            return (
              <ProductContainer key={product.name}>
                <p>
                  <strong>{product.name}</strong>{' '}
                  <span>({product.priceLabel})</span>{' '}
                  <span>{formatPrice(product.price)}</span>
                </p>
                <div>
                  <Button
                    onClick={() => {
                      onAddItemToBasket(product.name)
                    }}
                    size="small"
                    startIcon={<Icon color="secondary">add_circle</Icon>}
                    variant="outlined"
                    type="button"
                  >
                    Add item
                  </Button>
                </div>
              </ProductContainer>
            )
          })}
        </CardContent>
      </Card>
    </Container>
  )
}

export { Products }
