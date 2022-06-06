import React from "react";
import { IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { Typography } from "@mui/material";


function YesNo(props) {
  

  const [currentButton, setCurrentbutton] = React.useState(null);

  const onButtonClicked = (id) => {
    setCurrentbutton(currentButton === id ? null : id);
  };
  
  return (
    <div>
      <IconButton
        
        color={currentButton === 0 ? "success" : "default"}
        onClick={() => [onButtonClicked(0)]}
      >
        <CheckBoxIcon />
      </IconButton>
      <Typography variant="buttonlabel">Yes</Typography>
      <IconButton
        
        color={currentButton === 1 ? "error" : "default"}
        onClick={() => [onButtonClicked(1)]}
      >
        <DisabledByDefaultRoundedIcon />
      </IconButton>
      <Typography variant="buttonlabel">No</Typography>
    </div>
  );
}
export default YesNo;
