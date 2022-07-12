import React from "react";
import { FormControl, IconButton, RadioGroup } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { Typography } from "@mui/material";
import { useField, useFormikContext } from "formik";


const YesNo =( {
name,
label,
legend,
...otherProps
})=>{

  const [field, meta] = useField(name);
  const [currentButton, setCurrentbutton] = React.useState(null);
  const {setFieldValue} = useFormikContext();

  const onButtonClicked = (id) => {
    setCurrentbutton(currentButton === id ? null : id);
  };

  const handleChange = evt=>{
    const {checked} = evt.target;
    setFieldValue(name,checked);
  }
  
  const configYesNo={
    ...field,
    onChange: handleChange 
  }
  const configFormControl ={};
  if (meta && meta.touched && meta.error){
    configFormControl.error=true;
  }
  
  return (
    <FormControl style={{
     
     
      marginBottom: "1em",
    }} {...configFormControl}  >
      <div>
      <IconButton
        
        color={currentButton === 0 ? "success" : "default"}
        onClick={() => [onButtonClicked(0)]}
        {...configYesNo}
        label="Yes"
      >
        <CheckBoxIcon  />
      </IconButton>
      <Typography variant="buttonlabel" >Yes</Typography>
      <IconButton
        
        color={currentButton === 1 ? "error" : "default"}
        onClick={() => [onButtonClicked(1)]}
        {...configYesNo}
        label="No"
      >
        <DisabledByDefaultRoundedIcon />
      </IconButton>
      <Typography variant="buttonlabel" >No</Typography>
      </div>
    </FormControl>
  );
}
export default YesNo;
