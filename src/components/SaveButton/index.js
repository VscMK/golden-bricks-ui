import React from 'react'
import {
  
  Grid,
  Button, 
  makeStyles
 } from '@material-ui/core';

import { useFormikContext } from 'formik';


const SaveButton= ({
  children,
   ...otherProps
  }) => {

 const { submitForm } = useFormikContext();

 const handleSubmit = () => {
     submitForm();
 };

 
 
 const useStyles = makeStyles({
  btn: {
    fontSize: 15,
    backgroundColor: '#f8b133',
    color: 'rgba(0,0,0,.87)',
    '&:hover': {
      background: '#f8b133',
  },
  }
   });

   const classes = useStyles();


  return (
  
          <Button  
          className={classes.btn}
          disableElevation
          onClick={handleSubmit} >
           Save  
           {children}
          </Button>
       
        
    
  )
}

export default SaveButton;