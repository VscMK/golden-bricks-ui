import {React, useEffect, useState} from 'react';
import { Container, Grid } from '@material-ui/core';
import CreateAirpayForm from './create-airpay-form';
import Header from '../../components/Header';
import AirpayService from '../../services/airpay-service/airpayService';

function AirpaysPage() {

  const [airpays, setAirpays] = useState([]);
  useEffect(() => {
    AirpayService.getAirpays().then(
      (response) => {
        setAirpays(response.data);
      },
      (error) => {
        const content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setAirpays(content);
      }
    );
  }, []);

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