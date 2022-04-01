import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useField } from 'formik';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
  };

  const useStyles = makeStyles({
    textField: {
      height: '70px',
      margin0bottom: '10px'
    }
  });

  const classes = useStyles();

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield} className={classes.textField} />
  );
};

export default TextfieldWrapper;