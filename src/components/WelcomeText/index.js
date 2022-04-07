import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const WelcomeText = () => {
  return (
    <Grid item xs={12}>
      <Typography variant='h1' component='h1' gutterBottom style={{color: '#f8b133'}}>
        Welcome to VscMK
      </Typography>
  </Grid>
  )
}
