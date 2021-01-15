import React from 'react'
import { Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

import { formatPrice } from 'common/format-price'

import type { FC } from 'react'
import type { Product } from './products.type'

type PropTypes = {
  products: Array<Product>
}

const Products: FC<PropTypes> = ({ products }) => {
  return (
    <>
      {products.map((v) => {
        return (
          <p key={v.name}>
            <strong>{v.name}</strong> <span>({v.priceLabel})</span>{' '}
            <span>{formatPrice(v.price)}</span>
            <Button
              size="small"
              startIcon={<Icon color="primary">add_circle</Icon>}
              variant="outlined"
            >
              Add item
            </Button>
          </p>
        )
      })}
    </>
  )
}

export { Products }
