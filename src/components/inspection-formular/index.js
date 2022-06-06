import React from "react";
import { FormGroup } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
function Formular(props) {
  return (
    <FormGroup  row>
      <Autocomplete
      name="apiary_id"
        disabled
        sx={{ width: 300,mt: 5, mb: 10 }}
        renderInput={(params) => <TextField {...params} label="Apiary" />}
      />

      <Autocomplete
      name="colony_id"
        disabled
        sx={{ width: 300, mt: 5, mb: 10, ml: 3 }}
        renderInput={(params) => <TextField {...params} label="Colony" />}
      />
      <FormGroup row>
        <FormGroup style={{ margin: 10 }}>
          <InputLabel sx={{ mb: 1 }}>Number of boxes </InputLabel>
          <TextField
         
            type="number"
            name="number_of_boxes"
            defaultValue={0}
            variant="outlined"
            inputProps={{
              maxLength: 13,
              step: "1",
            }}
          />
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <InputLabel sx={{ mb: 1 }}>
            Number of combs occupied with bees{" "}
          </InputLabel>
          <TextField
          name="number_occupied_combs"
            type="number"
            defaultValue={0}
            variant="outlined"
            inputProps={{
              maxLength: 13,
              step: "1",
            }}
          />
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <InputLabel sx={{ mb: 1 }}>Number of bees combs </InputLabel>
          <TextField
          name="number_brood_combs"
            type="number"
            defaultValue={0}
            variant="outlined"
            inputProps={{
              maxLength: 13,
              step: "1",
            }}
          />
        </FormGroup>
      </FormGroup>
    </FormGroup>
  );
}
export default Formular;
