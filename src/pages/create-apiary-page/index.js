import React from 'react';
import Grid from '@material-ui/core';
import CreateAirpayForm from '../airpays-page/create-airpay-form';

const index = () => {
  return (
    <Grid style={{ marginTop: '70px' }}>
        <CreateAirpayForm />
    </Grid>
  )
}

export default index