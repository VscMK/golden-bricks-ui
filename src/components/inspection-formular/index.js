import React from "react";
import { FormGroup } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import {useField} from "formik";

const Formular =({
  name,
  ...otherProps
})=> {
  const [field,mata]= useField(name);
  const configAutocomplete={
    ...otherProps,
    ...field
  }

  if (mata && mata.touched && mata.error) {
    configAutocomplete.error = true;
    configAutocomplete.helperText = mata.error;
  }

  return (
    <FormGroup>
      <Autocomplete
      {...configAutocomplete}
        disabled
        sx={{ width: 300,mt: 5, mb: 10 }}
        renderInput={(params) => <TextField {...params}  />}
      />
</FormGroup>
     
    
  );
}
export default Formular;
