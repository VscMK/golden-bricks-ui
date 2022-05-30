import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from '../../components/Header';
import CreateColonyForm from './create-colony-form';

const CreateColonyPage = () => {
  return (
    <Container>
      <Header />
      <Grid style={{ marginTop: '70px' }}>
        <CreateColonyForm />
      </Grid>
    </Container>
  )
}
export default CreateColonyPage;