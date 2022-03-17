import React from 'react';
import { useState } from 'react';
import LoginForm from './components/login-form/LoginForm';

const LoginPage = () => {

    const login = (details) => {
        console.log(details)
    }

  return (
    <div>
            <LoginForm />
    </div>
  )
}

export default LoginPage;