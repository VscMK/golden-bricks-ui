import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@mui/material";
import TextFields from "../inspection-formular-textfield";

class Varroa extends React.Component {
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
        result: (newNum1*10) / this.state.num2
      });
    }
  }
  _changeNum2(e) {
    if (e.target.validity.valid) {
      var newNum2 = +e.target.value;
      this.setState({
        num2: newNum2,
        result: (this.state.num1*10)  / newNum2,
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
          varroa
        </Typography>

        <InputLabel sx={{ mb: 1, mt: 3 }}>Total number of varroa * 10</InputLabel>

        <Grid container direction="row">
          <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
           
            <OutlinedInput
              value={this.state.num1}
              onChange={this._changeNum1}
            />
          </FormControl>
        </Grid>
        
        <InputLabel sx={{ mb: 1, mt: 3 }}>Net bees weight</InputLabel>

        <Grid container direction="row">
          <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
            <OutlinedInput
              value={this.state.num2}
              onChange={this._changeNum2}
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
          Varroa in 10g of bees
        </Typography>

        <Typography
          sx={{ mb: 2, mt: 2, fontFamily: "Helvetica", fontSize: "24px" }} name="varoa"
        >
          {this.state.result}
        </Typography>
      </Grid>
    );
  }
}
export default Varroa;
