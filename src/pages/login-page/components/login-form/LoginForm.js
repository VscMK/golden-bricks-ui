import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextFieldWrapper from '../../../../components/form-components/TextField';

function LoginForm() {

  const useStyles = makeStyles((theme) => ({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  }))

   const INITIAL_VALUES = {
    email: "",
    username: "",
    password: ""
}

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().required('Please enter your email.'),
    username: Yup.string().required('Please enter your username.'),
    password: Yup.string().email('Invalid email address.').required('Please enter your password.'),
  })

  return (
    <Grid container>
    <Grid item xs={12}>
      <Container maxWidth="md">
        <Formik
          initialValues={{
            ...INITIAL_VALUES
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            console.log('VALUES:: ', values);
          }}
            >
          
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography >
                  Enter your credentials:
                </Typography>
                <TextFieldWrapper 
                name='email'
                label={'Email:'} />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='username'
                label={'Username:'} />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='password'
                label={'Password:'} />
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