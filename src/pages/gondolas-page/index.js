import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Grid, Button, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { addGondola, getGondolas } from '../../slices/gondolas-slice/gondolasSlice';
import { useDispatch, useSelector } from 'react-redux';
import GondolasTable from './gondolas-table';
import { getAirpays } from '../../slices/airpaySlice/airpaySlice';

const GondolasPage = (props) => {


  const [loading, setLoading] = useState(false);
  const apiaryId = window.localStorage.getItem('apiaryId');
  const id = parseInt(apiaryId);
  const no_colonies = window.localStorage.getItem('no_colonies');
  const nc = parseInt(no_colonies);
  const dispatch = useDispatch();
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

  const navigateToColonies = (apiary_id,no_colonies) => {
    window.localStorage.setItem('apiary_id', apiary_id);
    window.localStorage.setItem('no_colonies', no_colonies);
    return navigate('/create-gondola');
  }

 useEffect(() => {
    
     dispatch(getAirpays())
    .unwrap()
    .then(() => {
      
    })
    .catch(() => {
      
        setLoading(false);
      
    });
     
    }, []);
  
   useEffect (() => {
    setLoading(true);
  dispatch(getGondolas())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  const classes = useStyles();

  return (
    <Container>
        <Header />
        <Grid style={{ marginTop: '100px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
           
            //setLoading(true);
            // dispatch(addGondola({ id }))
            //   .unwrap()
            //   .then(() => {
            //      //props.history.push('/airpays-page');
            //     // window.location.reload();
            //   })
            //   .catch(() => {
            //     // setLoading(false);
            //   });
              return navigateToColonies(id,nc);
          }} >
            + new gondola
          </Button>
        </Grid>
        <Grid>
         <GondolasTable/>
        </Grid>
    </Container>
  )
}

export default GondolasPage;