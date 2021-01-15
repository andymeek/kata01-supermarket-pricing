import React from 'react'
import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

import { formatPrice } from 'common/format-price'

import type { FC } from 'react'
import type { PropTypes } from './products.type'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const Products: FC<PropTypes> = ({ products }) => {
  const classes = useStyles()

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography variant="h2" className={classes.title}>
          Products
        </Typography>
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
      </CardContent>
    </Card>
  )
}

export { Products }
