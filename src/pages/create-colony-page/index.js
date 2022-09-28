import React from 'react';
import Grid from '@material-ui/core';
import CreateColonyForm from '../colony-page/create-colony-form';

const CreateColonyPage = () =>{
  return(
    <Grid style={{marginTop: '70px'}}>
      <CreateColonyForm/>
    </Grid>
  )
}

export default CreateColonyPage;
