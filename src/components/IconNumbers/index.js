import React, { Component } from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import { Grid, IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import Looks4Icon from "@mui/icons-material/Looks4";

class IconNumbers extends Component {
  constructor(props) {
    super(props);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.state = { currentButton: null };
  }

  onButtonClicked(id) {
    this.setState({
      currentButton: this.state.currentButton === id ? null : id,
    });
  }
  render() {
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
              color={this.state.currentButton === 0 ? "warning" : "default"}
              onClick={() => this.onButtonClicked(0)}
            >
              <LooksOneIcon />
            </IconButton>

            <IconButton
              color={this.state.currentButton === 1 ? "warning" : "default"}
              onClick={() => this.onButtonClicked(1)}
            >
              <LooksTwoIcon/>
            </IconButton>

            <IconButton
              color={this.state.currentButton === 2 ? "warning" : "default"}
              onClick={() => this.onButtonClicked(2)}
            >
              <Looks3Icon />
            </IconButton>

            <IconButton
              color={this.state.currentButton === 3 ? "warning" : "default"}
              onClick={() => this.onButtonClicked(3)}
            >
              <Looks4Icon />
            </IconButton>
          </div>

        </FormControl>
      </Grid>
    );
  }
}
export default IconNumbers;
