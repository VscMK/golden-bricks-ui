import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextFieldWrapper from '../../../../components/form-components/TextField';
import ButtonWrapper from '../../../../components/form-components/Button';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../slices/authSlice/authSlice';
import { clearMessage } from '../../../../slices/messageSlice/messageSlice';
// import { clearMessage } from '../../../../slices/messageSlice/messageSlice';

const RegisterForm = (props) => {

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state => state.auth));
  const { message } = useSelector((state => state.message));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

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
    firstName: "",
    lastName: "",
    password: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("Email is invalidd")
    .required("Email is required"),
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lasttname is required"),
  password: Yup.string().required("Password is required")
});

const handleRegister = (formValue) => {
  const { firstName, lastName, email, password } = formValue;
  setLoading(true);
  dispatch(login({ firstName, lastName, email, password, roleId, teamId }))
    .unwrap()
    .then(() => {
      props.history.push("/profile");
      window.location.reload();
    })
    .catch(() => {
      setLoading(false);
    });
};

if (isLoggedIn) {
  return <Link to='/profile' />;
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
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleLogin}
            >
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography >
                  Enter your credentials to register:
                </Typography>
                <TextFieldWrapper 
                name='email'
                label={'Email:'} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='firstName'
                label={'firstname:'}                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='lastname'
                label={'Lastname:'}                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                type='password'
                name='password'
                label={'Password:'}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper className={classes.btn} disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : 'Login'}
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

export default RegisterForm;