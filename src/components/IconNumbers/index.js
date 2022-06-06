import React from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import { Grid, IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import Looks4Icon from "@mui/icons-material/Looks4";

function IconNumbers(props)  {
  const [currentButton, setCurrentbutton] = React.useState(null);

  const onButtonClicked =(id)=> {
    setCurrentbutton(currentButton === id ? null : id )
   }
 
  
    return (
      <Grid container direction="row">
        <FormControl
          style={{
            marginTop: "1em",
            marginRight: "6em",
            marginBottom: "2em",
          }}
        >
          <div>
            <IconButton
              color={currentButton === 0 ? "warning" : "default"}
              onClick={() => onButtonClicked(0)}
            >
              <LooksOneIcon />
            </IconButton>

            <IconButton
              color={currentButton === 1 ? "warning" : "default"}
              onClick={() => onButtonClicked(1)}
            >
              <LooksTwoIcon/>
            </IconButton>

            <IconButton
              color={currentButton === 2 ? "warning" : "default"}
              onClick={() => onButtonClicked(2)}
            >
              <Looks3Icon />
            </IconButton>

            <IconButton
              color={currentButton === 3 ? "warning" : "default"}
              onClick={() => onButtonClicked(3)}
            >
              <Looks4Icon />
            </IconButton>
          </div>

        </FormControl>
      </Grid>
    );
  }

export default IconNumbers;
