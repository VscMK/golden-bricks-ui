import React from 'react'
import {
  Container,
  Grid,
  Button, 
  makeStyles
 } from '@material-ui/core';
import Header from '../../components/Header';

import { useNavigate } from 'react-router-dom';
import ColoniesTable from './colony-table';


function ColonyPage () {
  
  const navigate = useNavigate();

  const useStyles = makeStyles({
    btn: {
      fontSize: 15,
      backgroundColor: '#f8b133',
      color: 'rgba(0,0,0,.87)',
      '&:hover': {
        background: '#f8b133',
    },
    }
  });
  const classes = useStyles();
  return (
    <Container>
         <Header />
         <Grid style={{ marginTop: '100px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            return navigate('/create-colony');
          }} >
            + new Colony
          </Button>
          
        </Grid>
          {/* <Grid>
            <ColoniesTable/> 
          </Grid>
          */}
        
    </Container>
  )
}

export default ColonyPage;