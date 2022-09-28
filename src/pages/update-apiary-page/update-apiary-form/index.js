import { React, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography,FormControl } from '@material-ui/core';
import TextfieldWrapper from '../../../components/form-components/TextField';
import ButtonWrapper from '../../../components/form-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateApiary } from '../../../slices/airpaySlice/airpaySlice';
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

const CreateAirpayForm = (props) => {

  const [loading, setLoading] = useState(false);
  const { airpays } = useSelector((state => state.airpays));
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const apiary = window.localStorage.getItem('apiary');
  const apiaryToUpdate = airpays.find(a => a.apiary_id === parseInt(apiary)); 
    const INITIAL_VALUES = {
        id: apiary,
        name: apiaryToUpdate.name,
        locationName: apiaryToUpdate.location_name,
        noColonies: apiaryToUpdate.no_colonies,
        fence: apiaryToUpdate.fence,
        electricity: apiaryToUpdate.electricity,
    }
    
    const VALIDATION_SCHEMA = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        locationName: Yup.string().required("Location name field is required"),
        noColonies: Yup.string().required("Number of colonies is required"),
        fence: Yup.string().required('Fence field is required'),
        electricity: Yup.string().required('Electricity field is required')
      });
    
    const handleSubmit = (formValue) => {
      const { id, name, locationName, noColonies, fence, electricity } = formValue;
      setLoading(true);
      dispatch(updateApiary({ id, name, locationName, noColonies, fence, electricity }))
        .unwrap()
        .then(() => {
          // props.history.push('/airpays-page');
          window.localStorage.removeItem('apiary');
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
                      Update apiary: 
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
                 
                      <FormControl>
                        <FormLabel>Fence</FormLabel>
                        <Field component={RadioGroup} name="fence" row>
                          <FormControlLabel
                            value="Y"
                            control={
                              <Radio
                               
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
                    ) : 'Update apiary'}
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