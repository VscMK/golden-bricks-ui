import React from "react"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { IconButton } from "@mui/material";

class IconButtons extends React.Component {
    constructor(props) {
      super(props)
      this.onButtonClicked = this.onButtonClicked.bind(this)
      this.state = { currentButton: null }
    }
  
    onButtonClicked (id) {
      this.setState({ currentButton: this.state.currentButton === id ? null : id })
    }
  
    render(){
      return (
        <div>
          <IconButton
            color={this.state.currentButton === 0 ? "success" : "default" }
            onClick={() => this.onButtonClicked(0)}>
            <SentimentSatisfiedAltIcon />
          </IconButton>
          <IconButton
            color={this.state.currentButton === 1 ? "warning" : "default" }
            onClick={() => this.onButtonClicked(1)}>
            <SentimentNeutralIcon />
          </IconButton>
          <IconButton
            color={this.state.currentButton === 2 ? "error" : "default" }
            onClick={() => this.onButtonClicked(2)}>
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
        </div>
      );
    }
  }
  export default IconButtons;