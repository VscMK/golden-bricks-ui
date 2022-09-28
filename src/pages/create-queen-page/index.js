import React from 'react';
import Grid from '@material-ui/core';
import CreateQueenForm from '../queen-page/create-queen-form';


const CreateQueenPage = () =>{
  return(
    <Grid style={{marginTop: '70px'}}>
      <CreateQueenForm/>
    </Grid>
  )
}

export default CreateQueenPage;
