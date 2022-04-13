import {React, useEffect, useState} from 'react';
import { Container, Grid } from '@material-ui/core';
import CreateAirpayForm from './create-airpay-form';
import Header from '../../components/Header';
import AirpayService from '../../services/airpay-service/airpayService';
import { getAirpays } from '../../slices/airpaySlice/airpaySlice';
import { useSelector,useDispatch } from 'react-redux';

function AirpaysPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { airpays } = useSelector((state => state.airpays));

  useEffect (() => {
    setLoading(true);
  dispatch(getAirpays())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  console.log('AIRPAYS :: ', airpays);

  return (
    <Container>
         <Header />
         <Grid style={{ marginTop: '70px' }}>
            <CreateAirpayForm />
        </Grid>
    </Container>
  )
}

export default AirpaysPage;