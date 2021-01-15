import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

import type { FC } from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const Receipt: FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h2" className={classes.title}>
            Receipt
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export { Receipt }
