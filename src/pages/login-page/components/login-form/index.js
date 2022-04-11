import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import TextFieldWrapper from '../../../../components/form-components/TextField';
import ButtonWrapper from '../../../../components/form-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../slices/authSlice/authSlice';
import { clearMessage } from '../../../../slices/messageSlice/messageSlice';
import { WelcomeText } from '../../../../components/WelcomeText';
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state => state.auth));
  const { message } = useSelector((state => state.message));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  let navigate = useNavigate();

useEffect(() => {
  if (isLoggedIn) {
      return navigate('/profile');
   }
},[isLoggedIn]);


   const INITIAL_VALUES = {
    email: "",
    password: ""
}

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("Email is invalidd")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

const handleLogin = (formValue) => {
  const { email, password } = formValue;
  setLoading(true);
  dispatch(login({ email, password }))
    .unwrap()
    .then(() => {
      props.history.push("/profile");
      window.location.reload();
    })
    .catch(() => {
      setLoading(false);
    });
};

  return (
    <Grid container>
    <Grid item xs={12}>
      <Container maxWidth="md">
        <Formik
          initialValues={{
            ...INITIAL_VALUES
          }}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleLogin}
            >
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <WelcomeText />
                <Typography variant='h4' component='h2' gutterBottom >
                  Enter your credentials to login:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='email'
                label={'Email:'} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                type='password'
                name='password'
                label={'Password:'}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper disabled={loading} >
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : 'Login'}
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
    </Grid>
   </Grid>
);
}

export default LoginForm;