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
        color: 'primary',
        fullWidth: true,
        onClick: handleSubmit,
    }
    
    const useStyles = makeStyles({
        btn: {
          fontSize: 30,
          backgroungColor: 'yellow',
        }
      });

      const classes = useStyles();

    return (
        <Button className={classes.btn}
            {...configButton}
        >
           {children}
        </Button>
    );
}

export default ButtonWrapper;
