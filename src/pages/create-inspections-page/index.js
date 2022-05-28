import React from 'react';
import Grid from '@material-ui/core';
import CreateInspectionsForm from '../inspections-page/create-inspections-form';

const CreateInspectionsPage = () =>{
  return(
    <Grid style={{marginTop: '70px'}}>
      <CreateInspectionsForm/>
    </Grid>
  )
}

export default CreateInspectionsPage;
