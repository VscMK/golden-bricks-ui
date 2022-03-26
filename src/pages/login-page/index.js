import React from 'react';
import { useState } from 'react';
import LoginForm from './components/login-form';
import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

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
        <NavLink to={'/register'}>
          <Button>
            Register
          </Button>
        </NavLink>
    </Grid>
  )
}

export default LoginPage;