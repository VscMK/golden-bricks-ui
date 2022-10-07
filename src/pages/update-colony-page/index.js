import React from 'react';
import Grid from '@material-ui/core/Grid';
import CreateColonyForm from '../colony-page/create-colony-form';
import ColoniesTable from '../colony-page/colony-table';



const UpdateColonyPage = () => {
  return (
    <Grid style={{ marginTop: '70px' }}>
        <ColoniesTable/>
        </Grid>
  )
}

export default UpdateColonyPage;