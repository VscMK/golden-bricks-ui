import React from "react";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@mui/material";

function Honey(props) {
  return (
    <Grid containter direction="row">
      <Typography
        variant="caption1"
        sx={{ textTransform: "uppercase", letterSpacing: 2 }}
      >
        Honey
      </Typography>

      <InputLabel sx={{ mb: 1, mt: 2 }}>Amount</InputLabel>

      <Grid container direction="row">
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <OutlinedInput
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
export default Honey;
