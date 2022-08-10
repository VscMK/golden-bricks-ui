import { React, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography,FormControl,FormGroup } from '@material-ui/core';
import TextfieldWrapper from '../../../components/form-components/TextField';
import ButtonWrapper from '../../../components/form-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addAirpay } from '../../../slices/airpaySlice/airpaySlice';
// import { clearMessage } from '../../../../slices/messageSlice/messageSlice';
import { useNavigate } from "react-router-dom";
import Header from '../../../components/Header';
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";
import FormLabel from "@material-ui/core/FormLabel";

function CreateAirpayForm()  {

 

  const [loading, setLoading] = useState(false);
//   const { isLoggedIn } = useSelector((state => state.auth));
//   const { message } = useSelector((state => state.message));
  let dispatch = useDispatch();
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
    
     

     const handleSubmit =  (formValue)=> {
      
       const { name, 
        locationName, 
        noColonies,
         fence, 
         electricity }=formValue;

         setLoading(true);
      dispatch(addAirpay( {name, locationName, noColonies, fence,electricity} ))
      .unwrap().then(() => {
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
    
      
  
         return navigate('/airpays-page');
        
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
                 {(formik)=>(
              <Form onSubmit={handleSubmit}>

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
                   
                    onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='locationName'
                    label={'Location:'} 
                   
                    onChange={formik.handleChange}
                    />
                   </Grid>
                   <Grid item xs={12}>
                    <TextfieldWrapper 
                    name='noColonies'
                    label={'Number of colonies:'} 
                   
                    onChange={formik.handleChange}
                    />
                  </Grid>
                 <Grid item xs={12}>
                 
                      <FormControl>
                        <FormLabel>Fence</FormLabel>
                        <Field component={RadioGroup} name="fence" row>
                          <FormControlLabel
                            value="Y"
                            control={
                              <Radio
                                onChange={formik.handleChange}
                                icon={<CheckBoxIcon />}
                                checkedIcon={<CheckBoxIcon />}
                              />
                            }
                            label="Yes"
                          />
                          <FormControlLabel
                            value="N"
                            control={
                              <Radio
                                onChange={formik.handleChange}
                                icon={<DisabledByDefaultRoundedIcon />}
                                checkedIcon={<DisabledByDefaultRoundedIcon />}
                              />
                            }
                            label="No"
                          />
                        </Field>
                      </FormControl>
                    
                  </Grid>

                  <Grid item xs={12}>
                  <FormControl>
                        <FormLabel>Electricity</FormLabel>
                        <Field component={RadioGroup} name="electricity" row>
                          <FormControlLabel
                            value="Y"
                            control={
                              <Radio
                                onChange={formik.handleChange}
                                icon={<CheckBoxIcon />}
                                checkedIcon={<CheckBoxIcon />}
                              />
                            }
                            label="Yes"
                          />
                          <FormControlLabel
                            value="N"
                            control={
                              <Radio
                                onChange={formik.handleChange}
                                icon={<DisabledByDefaultRoundedIcon />}
                                checkedIcon={<DisabledByDefaultRoundedIcon />}
                              />
                            }
                            label="No"
                          />
                        </Field>
                      </FormControl>
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
                  )}
            </Formik>
          </Container>
        </Grid>
       </Grid>
    );
}

export default CreateAirpayForm;