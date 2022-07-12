import React from "react";
import { FormGroup } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import {useField} from "formik";
const TextFields =({
    name,
    ...otherProps
  })=> {
    const [field,mata]= useField(name);
    const configTextFields={
      ...otherProps,
      ...field
    }
    if (mata && mata.touched && mata.error) {
        configTextFields.error = true;
        configTextFields.helperText = mata.error;
      }
    
    return (
      
       
         
          <TextField
         {...configTextFields}
            type="number"
           
            defaultValue={0}
            variant="outlined"
            inputProps={{
              maxLength: 13,
              step: "1",
            }}
          />
      
     
       
      
    );
  }
  export default TextFields;
      