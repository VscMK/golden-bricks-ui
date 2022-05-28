import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { FormGroup, Grid } from "@material-ui/core";
import { InputLabel } from "@mui/material";

class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
    this._changeNum1 = this._changeNum1.bind(this);
    this._changeNum2 = this._changeNum2.bind(this);
  }

  _changeNum1(e) {
    if (e.target.validity.valid) {
      var newNum1 = +e.target.value;
      this.setState({
        num1: newNum1,
        result: newNum1 + this.state.num2,
      });
    }
  }

  _changeNum2(e) {
    if (e.target.validity.valid) {
      var newNum2 = +e.target.value;
      this.setState({
        num2: newNum2,
        result: [50 - (this.state.num1 + newNum2)] * 2,
      });
    }
  }

  render() {
    return (
      <Grid containter direction="row">
        
        <Typography
          variant="caption1"
          sx={{ textTransform: "uppercase", letterSpacing: 2 }}
        >
           cells
        </Typography>

        <InputLabel sx={{ mb: 1, mt: 3 }}>Number of unopened cells </InputLabel>

        <Grid container direction="row">
          <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
            <OutlinedInput
              value={this.state.num1}
              onChange={this._changeNum1}
            />
          </FormControl>
        </Grid>
        
        
        
        

        <InputLabel sx={{ mb: 1, mt: 3 }}>Number of cells with remains</InputLabel>

        <Grid container direction="row">
          <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
            <OutlinedInput
              value={this.state.num2}
              onChange={this._changeNum2}
            />
          </FormControl>
        </Grid>
      
        <Typography  sx={{  mt: 3, fontFamily: "Helvetica", fontSize: 17, textTransform: "uppercase" }}>
          Percentage
        </Typography>

        <Typography sx={{ mt: 2, fontFamily: "Helvetica", fontSize: "24px" }}>
          {this.state.result}
        </Typography>
        
      </Grid>
    );
  }
}

export default NumericInput;
