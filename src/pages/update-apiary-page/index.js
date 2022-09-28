import React from 'react';
import Grid from '@material-ui/core';
import CreateAirpayForm from '../airpays-page/create-airpay-form';
import ApiarysTable from '../airpays-page/apiarys-table';

const UpdateApiaryPage = () => {
  return (
    <Grid style={{ marginTop: '70px' }}>
        <ApiarysTable/>
    </Grid>
  )
}

export default UpdateApiaryPage;