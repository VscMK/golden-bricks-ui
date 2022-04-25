import {React} from 'react';
import {
  Container,
  Grid,
  Button, 
  makeStyles
 } from '@material-ui/core';
import Header from '../../components/Header';
// import { getAirpays } from '../../slices/airpaySlice/airpaySlice';

import { useNavigate } from 'react-router-dom';
import ApiarysTable from './apiarys-table';

function AirpaysPage() {
  
  const navigate = useNavigate();

  const useStyles = makeStyles({
    btn: {
      fontSize: 30,
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
            return navigate('/create-apiary');
          }} >
            Add new apiary
          </Button>
        </Grid>
        <Grid>
          <ApiarysTable />
        </Grid>  
    </Container>
  )
}

export default AirpaysPage;