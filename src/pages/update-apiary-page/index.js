import React from 'react';
import {Container, Grid} from '@material-ui/core';
import Header from '../../components/Header';
import UpdateAirpayForm from './update-apiary-form';

const UpdateApiaryPage = () => {
  return (
    <Container>
      <Header />
      <Grid style={{ marginTop: '70px' }}>
        <UpdateAirpayForm />
      </Grid>
    </Container>
  )
}

export default UpdateApiaryPage;