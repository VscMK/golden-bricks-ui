import React from 'react';
import { useState } from 'react';
import LoginForm from './components/login-form';
import { Container, Grid, makeStyles } from '@material-ui/core';

const LoginPage = () => {
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
      <Grid className={classes.centerLoginForm}>
        <LoginForm />
      </Grid>
    </Container>
  )
}

export default LoginPage;