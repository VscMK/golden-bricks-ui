import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Grid, Button, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { addGondola, getGondolas } from '../../slices/gondolas-slice/gondolasSlice';
import { useDispatch, useSelector } from 'react-redux';

const GondolasPage = () => {

  const apiaryId = window.localStorage.getItem('apiaryId');
  const [loading, setLoading] = useState(false);
  const { gondolas } = useSelector(state => state.gondolas);
  const id = parseInt(apiaryId);
  const dispatch = useDispatch();
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

  console.log('GONDOLAS : ', gondolas);

  return (
    <Container>
        <Header />
        <Grid style={{ marginTop: '100px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            // return navigate('/create-gondola');
            // setLoading(true);
            dispatch(addGondola({ id }))
              .unwrap()
              .then(() => {
                // props.history.push('/airpays-page');
                // window.location.reload();
              })
              .catch(() => {
                // setLoading(false);
              });
          }} >
            Add new gondola
          </Button>
        </Grid>
    </Container>
  )
}

export default GondolasPage;