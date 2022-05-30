import { React, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import TextfieldWrapper from '../../../components/form-components/TextField';
import ButtonWrapper from '../../../components/form-components/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { clearMessage } from '../../../../slices/messageSlice/messageSlice';
import { useNavigate } from "react-router-dom";
import { addColony } from '../../../slices/coloniesSlice/coloniesSlice';

const CreateColonyForm = (props) => {
   
     const [loading, setLoading] = useState(false);
   //   const { isLoggedIn } = useSelector((state => state.auth));
   //   const { message } = useSelector((state => state.message));
     const dispatch = useDispatch();
     let navigate = useNavigate();
   
       const INITIAL_VALUES = {
           apiaryId: window.localStorage.getItem('apiaryId'),
           gondolaId: window.localStorage.getItem('gondolaId'),
           noBoxes: '',
           queenId: '',
           queenAlarm: '',
       }
       
       const VALIDATION_SCHEMA = Yup.object().shape({
        //    name: Yup.string().required("Name is required"),
        //    locationName: Yup.string().required("Location name field is required"),
           noBoxes: Yup.string().required("Number of colonies is required"),
           queenId: Yup.string().required('Fence field is required'),
           queenAlarm: Yup.string().required('Electricity field is required')
         });
       
       const handleSubmit = (formValue) => {
         const { apiaryId, gondolaId, noBoxes, queenId, queenAlarm } = formValue;
         setLoading(true);
         dispatch(addColony({ apiaryId, gondolaId, noBoxes, queenId, queenAlarm  }))
           .unwrap()
           .then(() => {
            // window.location.reload();
           })
           .catch(() => {
             setLoading(false);
           });
           return navigate('/colonies-page');
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
                         Create new colony: 
                       </Typography>
                     </Grid>
                     {/* <Grid item xs={12}>
                       <TextfieldWrapper 
                       name='name'
                       label={'Name:'} 
                       />
                     </Grid> */}
                     {/* <Grid item xs={12}>
                       <TextfieldWrapper 
                       name='locationName'
                       label={'Location:'} 
                       />
                      </Grid> */}
                      <Grid item xs={12}>
                       <TextfieldWrapper 
                       name='noBoxes'
                       label={'Number of boxes:'} 
                       />
                     </Grid>
                    <Grid item xs={12}>
                       <TextfieldWrapper 
                       name='queenId'
                       label={'Queen:'}
                       />
                     </Grid>
                     <Grid item xs={12}>
                       <TextfieldWrapper 
                       name='queenAlarm'
                       label={'Queen Alarm:'}
                       />
                     </Grid>
                     <Grid item xs={12}>
                       <ButtonWrapper disabled={loading} >
                       {loading ? (
                         <span className="spinner-border spinner-border-sm"></span>
                       ) : 'Add colony'}
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

export default CreateColonyForm;