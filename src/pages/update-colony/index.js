import React from 'react';
import {Container, Grid} from '@material-ui/core';
import Header from '../../components/Header';
import UpdateColonyForm from './update-colony-form';

const UpdateColonyPage = () => {
  return (
    <Container>
      <Header />
      <Grid style={{ marginTop: '70px' }}>
        <UpdateColonyForm />
      </Grid>
    </Container>
  )
}

export default UpdateColonyPage;