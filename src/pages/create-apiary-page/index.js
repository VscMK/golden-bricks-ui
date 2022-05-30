import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CreateAirpayForm from '../airpays-page/create-airpay-form';
import Header from '../../components/Header';

const CreateApiaryPage = () => {
  return (
    <Container>
      <Header />
      <Grid style={{ marginTop: '70px' }}>
        <CreateAirpayForm />
      </Grid>
    </Container>
  )
}

export default CreateApiaryPage;