import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core';

const ButtonWrapper = ({
    children,
     ...otherProps
    }) => {

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    };

    const configButton = {
        variant: 'contained',
        fullWidth: true,
        color: 'inherit',
        onClick: handleSubmit,
    }
    
    const useStyles = makeStyles({
        btn: {
          fontSize: 30,
          backgroundColor: '#f8b133',
          color: 'rgba(0,0,0,.87)',
          '&:hover': {
            background: '#f8b133',
        },
        }
      });

      const classes = useStyles();

    return (
        <Button className={classes.btn} disableElevation
            {...configButton}
        >
           {children}
        </Button>
    );
}

export default ButtonWrapper;
