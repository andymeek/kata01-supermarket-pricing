import React from 'react'

import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'

import type { FC } from 'react'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}))

const Header: FC = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          Supermarket (QMetric JavaScript Exercise)
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export { Header }
