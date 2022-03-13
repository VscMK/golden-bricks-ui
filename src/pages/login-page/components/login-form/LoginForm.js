import React from 'react';
import { Form, useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';

function LoginForm() {

  const useStyles = makeStyles((theme) => ({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  }))

   const formik = useFormik({
       initialValues: {
           email: "",
           username: "",
           password: ""
       },
       validationSchema: Yup.object({
        firstName: Yup.string().max(40, 'Must be 40 characters or less.')
        .required("Required"),

       }),
       onSubmit: (values) => {
        console.log('VALUES: ', values);
       }
   });

   const INITIAL_VALUES = {
    email: "",
    username: "",
    password: ""
}

  const FORM_VALIDATION = Yup.object().shape({

  })

   console.log('ERR:: ', formik.errors);

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
                <Typography>
                  Email
                </Typography>
                <Typography>
                  Username
                </Typography>
                <Typography>
                  Password
                </Typography>
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