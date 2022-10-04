import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@mui/material";
import { useField } from "formik";

function NumericInput(props){
    const [num1, setNum1]= useState(0);
    const [num2, setNum2]= useState(0);
    const [result, setResult]=useState(0);
   
    const _changeNum1=(e)=>{
        if(e.target.validity.valid){
            
            var newNum1 =+ e.target.value;
            setNum1(newNum1)
            setResult(newNum1/num2)
        }
    }

    const _changeNum2=(e)=>{
        if(e.target.validity.valid){
            
            var newNum2 =+ e.target.value;
            setNum2(newNum2)
            setResult(num1/newNum2)
        }
    }


    return (
      <Grid containter direction="row">
      <Typography
        variant="caption1"
        sx={{ textTransform: "uppercase", letterSpacing: 2 }}
      >
        natural fallen varroa
      </Typography>

      <InputLabel sx={{ mb: 1, mt: 3 }}>Total number of varroa</InputLabel>

      <Grid container direction="row">
        <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
          <OutlinedInput
            value={num1}
            onChange={_changeNum1}
          />
        </FormControl>
      </Grid>

      <InputLabel sx={{ mb: 1, mt: 3 }}>Total number of days</InputLabel>

      <Grid container direction="row">
        <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
          <OutlinedInput
            value={num2}
            onChange={_changeNum2}
          />
        </FormControl>
      </Grid>

      <Typography
        sx={{
          mt: 2,
          fontFamily: "Helvetica",
          fontSize: 15,
          textTransform: "uppercase",
        }}
      >
        Number of fallen varroa per day
      </Typography>

      <Typography  sx={{ mt: 2, fontFamily: "Helvetica", fontSize: "24px" }}>
        {result}
      </Typography>
    </Grid>
      );

}

export default NumericInput;