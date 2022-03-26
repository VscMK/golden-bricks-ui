import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextFieldWrapper from '../../../components/form-components/TextField';
import ButtonWrapper from '../../../components/form-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../slices/authSlice/authSlice';
import { clearMessage } from '../../../slices/messageSlice/messageSlice';
// import { clearMessage } from '../../../../slices/messageSlice/messageSlice';

const RegisterForm = (props) => {

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state => state.auth));
  const { message } = useSelector((state => state.message));
  const dispatch = useDispatch();
  const role_id = 2;
  const team_id = 1;

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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lasttname is required"),
  email: Yup.string()
    .email("Email is invalidd")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const papa = (formValue) => {
  console.log('HANDLE REGISTER::: ', formValue);
  const { firstName, lastName, email, password} = formValue;
  const first_name = firstName;
  const last_name = lastName;
  setLoading(true);
  dispatch(register({ first_name, last_name, email, password, role_id, team_id }))
    .unwrap()
    .then(() => {
      props.history.push("/profile");
      window.location.reload();
    })
    .catch(() => {
      console.log('VLEZE TUKA VO CATCH:: ');
      setLoading(false);
    });
};

// if (isLoggedIn) {
//   return <Link to='/profile' />;
// }

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
          onSubmit={papa}
            >
          <Form>
            <Grid container spacing={1}>
            <Typography variant='h4' component='h2' gutterBottom>
                  Enter your credentials to register:
                </Typography>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='firstName'
                label={'First name:'} />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper 
                name='lastName'
                label={'Last name:'} />
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
                <ButtonWrapper className={classes.btn} disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : 'Register'}
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