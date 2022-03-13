import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextFieldWrapper from '../../../../components/form-components/TextField';
import Button from '../../../../components/form-components/Button';
import ButtonWrapper from '../../../../components/form-components/Button';

function LoginForm() {

  const useStyles = makeStyles((theme) => ({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  }))

  const classes = useStyles();

   const INITIAL_VALUES = {
    email: "",
    username: "",
    password: ""
}

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email('Invalid email address.').required('Please enter your email.'),
    username: Yup.string().required('Please enter your username.'),
    password: Yup.string().required('Please enter your password.'),
  })

  return (
    <Grid container>
    <Grid item xs={12}>
      <Container maxWidth="md">
        {/* <div className={classes.formWrapper}> */}
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
            <Grid container spacing={1}>
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
              <Grid item xs={12}>
                <ButtonWrapper>
                  Submit form
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        {/* </div> */}
      </Container>
    </Grid>
   </Grid>
);
}

export default LoginForm;