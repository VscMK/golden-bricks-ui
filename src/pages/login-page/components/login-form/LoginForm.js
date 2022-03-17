import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextFieldWrapper from '../../../../components/form-components/TextField';
import ButtonWrapper from '../../../../components/form-components/Button';

function LoginForm() {

  const useStyles = makeStyles(() => ({
    // formWrapper: {
    //   marginTop: theme.spacing(5),
    //   marginBottom: theme.spacing(8),
    // },
    btn: {
      fontSize: '50px',
    },
  }))

  const classes = useStyles();

   const INITIAL_VALUES = {
    email: "",
    username: "",
    password: ""
}

  return (
    <Grid container>
    <Grid item xs={12}>
      <Container maxWidth="md">
        <div className={classes.formWrapper}>
        <Formik
          initialValues={{
            ...INITIAL_VALUES
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email is invalidd")
              .required("Email is required"),
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required")
          })}
          onSubmit={values => {
            console.log('VALUES:: ', values);
          }}
            >
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography >
                  Enter your credentials to login:
                </Typography>
                <TextFieldWrapper 
                name='email'
                label={'Email:'} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='username'
                label={'Username:'}                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='password'
                label={'Password:'}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper className={classes.btn}>
                  Login
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        </div>
      </Container>
    </Grid>
   </Grid>
);
}

export default LoginForm;