import React from 'react';
import RegisterForm from './register-form';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Header from '../../components/Header/'

const RegisterPage = () => {
  const useStyles = makeStyles ({
    centerLoginForm: {
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)'  
    },
  });

  const classes = useStyles();

    const login = (details) => {
        console.log(details)
    }

  return (
    <Container >
      <Header />
      <Grid className={classes.centerLoginForm}>
        <div className="center-form">
          <RegisterForm />
        </div>
        <Grid >
        </Grid>
     </Grid>
    </Container>
  )
}

export default RegisterPage;