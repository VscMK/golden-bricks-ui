import React from "react"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { IconButton } from "@mui/material";

function IconButtons(props) {
    
    const [currentButton, setCurrentbutton] = React.useState(null);
   

    const onButtonClicked =(id)=> {
     setCurrentbutton(currentButton === id ? null : id )
    }
    
  
  
      return (
        <div>
          <IconButton
         
            color={currentButton === 0 ? "success" : "default" }
            onClick={() => onButtonClicked(0)}>
            <SentimentSatisfiedAltIcon />
          </IconButton>
          <IconButton
            color={currentButton === 1 ? "warning" : "default" }
            onClick={() => onButtonClicked(1)}>
            <SentimentNeutralIcon />
          </IconButton>
          <IconButton
            color={currentButton === 2 ? "error" : "default" }
            onClick={() => onButtonClicked(2)}>
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
        </div>
      );
    }
  
  export default IconButtons;