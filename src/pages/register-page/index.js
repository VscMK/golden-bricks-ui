import React from 'react';
import { useState } from 'react';
import RegisterForm from './register-form';
import { Grid } from '@material-ui/core';

const RegisterPage = () => {
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
            <RegisterForm />
        </div>
        <Grid >
          
        </Grid>
    </Grid>
  )
}

export default RegisterPage;