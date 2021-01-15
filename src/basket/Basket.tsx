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

import type { FC } from 'react'
import type { PropTypes } from './Basket.types'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const Basket: FC<PropTypes> = ({ basket }) => {
  const classes = useStyles()

  return (
    <Container style={{ marginTop: '20px' }}>
      <Card elevation={0}>
        <CardContent style={{ padding: 0 }}>
          <MaterialTable
            components={{
              Container: (props: unknown) => <Paper {...props} elevation={0} />,
            }}
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
                onClick: () => {},
              },
              {
                icon: () => <DeleteOutline />,
                tooltip: 'Delete All Item',
                onClick: () => {},
                isFreeAction: true,
              },
            ]}
            columns={[
              { title: 'Product', field: 'name' },
              { title: 'Quantity', field: 'quantity', type: 'numeric' },
              { title: 'Price', field: 'price', type: 'currency' },
            ]}
            options={{
              actionsColumnIndex: -1,
              emptyRowsWhenPaging: false,
              paging: false,
              search: false,
            }}
            localization={{
              body: {
                emptyDataSourceMessage: 'No item in your basket',
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