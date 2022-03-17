import React from 'react';
import { useState } from 'react';
import LoginForm from './components/login-form/LoginForm';
import { Grid } from '@material-ui/core';

const LoginPage = () => {
    // const styles = {
    //     centerLoginForm: {
    //         display: "flex",
    //         justify-content: "center",
            
    //     }
    // }

    const login = (details) => {
        console.log(details)
    }

  return (
    <Grid container direction="row" alignItems="center" justify="center">
        <div className="center-form">
            <LoginForm />
        </div>
    </Grid>
  )
}

export default LoginPage;