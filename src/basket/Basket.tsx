import React from 'react'
import {
  Card,
  CardContent,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { DeleteOutline } from '@material-ui/icons'
import MaterialTable from 'material-table'

import { isOfType } from 'common/typeguards'

import type { FC } from 'react'
import type { Basket as BasketType, PropTypes } from './Basket.types'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '20px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const Basket: FC<PropTypes> = ({ basket, removeItemFromBasket }) => {
  const classes = useStyles()
  const components = {
    Container: (props: unknown) => <Paper {...props} elevation={0} />,
  }

  return (
    <Container className={classes.container}>
      <Card elevation={0}>
        <CardContent style={{ padding: 0 }}>
          <MaterialTable
            components={components}
            isLoading={false}
            title={
              <Typography variant="h2" className={classes.title}>
                Basket
              </Typography>
            }
            data={basket}
            actions={[
              {
                icon: () => <DeleteOutline />,
                tooltip: 'Delete Item(s)',
                onClick: (_, basketItem: any) => {
                  if (isOfType<BasketType>(basketItem, 'name'))
                    removeItemFromBasket(basketItem)
                },
              },
            ]}
            columns={[
              { title: 'Product', field: 'name' },
              { title: 'Quantity', field: 'quantity', type: 'numeric' },
              {
                title: 'Price',
                field: 'basketPrice',
                type: 'currency',
                currencySetting: { currencyCode: 'gbp' },
              },
            ]}
            options={{
              actionsColumnIndex: -1,
              emptyRowsWhenPaging: false,
              paging: false,
              search: false,
            }}
            localization={{
              body: {
                emptyDataSourceMessage: 'No items in your basket',
              },
              header: {
                actions: '',
              },
            }}
          />

          <div
            style={{ padding: '10px 20px 10px 10px', textAlign: 'right' }}
          ></div>
        </CardContent>
      </Card>
    </Container>
  )
}

export { Basket }
