import { React, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import TextfieldWrapper from '../../../components/form-components/TextField';
import ButtonWrapper from '../../../components/form-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addAirpay } from '../../../slices/airpaySlice/airpaySlice';
// import { clearMessage } from '../../../../slices/messageSlice/messageSlice';
import { useNavigate } from "react-router-dom";
import Header from '../../../components/Header';

const CreateAirpayForm = (props) => {

  const [loading, setLoading] = useState(false);
//   const { isLoggedIn } = useSelector((state => state.auth));
//   const { message } = useSelector((state => state.message));
  const dispatch = useDispatch();
  let navigate = useNavigate();

    const INITIAL_VALUES = {
        name: '',
        locationName: '',
        noColonies: '',
        fence: '',
        electricity: '',
    }
    
    const VALIDATION_SCHEMA = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        locationName: Yup.string().required("Location name field is required"),
        noColonies: Yup.string().required("Number of colonies is required"),
        fence: Yup.string().required('Fence field is required'),
        electricity: Yup.string().required('Electricity field is required')
      });
    
    const handleSubmit = (formValue) => {
      const { name, locationName, noColonies, fence, electricity } = formValue;
      setLoading(true);
      dispatch(addAirpay({ name, locationName, noColonies, fence, electricity }))
        .unwrap()
        .then(() => {
          props.history.push('/airpays-page');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    };


  return (
        <Grid container>
        <Grid item xs={12} style={{ marginTop: '70px' }}>
          <Container maxWidth="md">
            <Formik
              initialValues={{
                ...INITIAL_VALUES
              }}
              validationSchema={VALIDATION_SCHEMA}
              onSubmit={handleSubmit}
                >
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant='h4' component='h2' gutterBottom >
                      Create new apiary: 
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='name'
                    label={'Name:'} 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='locationName'
                    label={'Location:'} 
                    />
                   </Grid>
                   <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='noColonies'
                    label={'Number of colonies:'} 
                    />
                  </Grid>
                 <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='fence'
                    label={'Fence:'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='electricity'
                    label={'Electricity:'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper disabled={loading} >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : 'Submit'}
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

export default CreateAirpayForm;