import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../../components/Header";
import { Container, FormGroup, Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Calculations from "../../../components/Calculations";
import NaturalVarroa from "../../../components/NaturalVarroa";
import Varroa from "../../../components/Varroa10g";
import IconButtons from "../../../components/IconButton";
import { InputLabel } from "@mui/material";
import Honey from "../../../components/ProductionHoney";
import Pollen from "../../../components/ProductionPollen";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IconButton } from "@mui/material";
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

import IconNumbers from "../../../components/IconNumbers";

const BeesFood = [{ label: "Pollen" }, { label: "Nectar" }];
const attention = [
  { label: "Urgent" },
  { label: "1 week" },
  { label: "2 weeks" },
  { label: "3 weeks" },
];

function CreateInspectionsForm() {
  const [status, setStatus] = React.useState(0);
  const [decimal, setDecimal] = React.useState("0.0");
  
  const radioHandler = (status) => {
    setStatus(status);
    
  };
  

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffecb3",
      },
    },

    typography: {
      caption: {
        fontSize: 25,
        fontFamily: "Helvetica",
      },
      caption1: {
        
        fontSize: 15,
        fontFamily: "Helvetica",
        color: "#303030",
      },
      buttonlabel:{
          fontSize: 17,
          fontFamily: "Helvetica",
          color: "gray"
      }
    },
  });

  return (
    <Container>
      <Header />
      <ThemeProvider theme={theme}>
      <Autocomplete
                    disabled
                    sx={{ width: 300, mt: 20, mb: 10 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Apiary" />
                    )}
                  />
        <Accordion style={{  }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "primary.main" }}
          >
            <Typography variant="caption">Colony</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Brood Status
            </Typography>
            <Grid container direction="row">
              <Grid>
                <FormControl
                  style={{
                    marginTop: "3em",
                    marginRight: "6em",
                    marginBottom: "2em",
                  }}
                >
                  <FormLabel>no signs of queen loss</FormLabel>
                  <div>
                  <IconButton>
                 <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
                </FormControl>
                
              </Grid>

              <Grid>
                <FormControl style={{ marginTop: "3em", marginRight: "6em" }}>
                  <FormLabel>eggs</FormLabel>
                  <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
                </FormControl>
              </Grid>

              <Grid>
                <FormControl style={{ marginTop: "3em", marginRight: "6em" }}>
                  <FormLabel>larve</FormLabel>
                  <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon/>
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
                </FormControl>
              </Grid>

              <Grid>
                <FormControl style={{ marginTop: "3em", marginRight: "6em" }}>
                  <FormLabel>bee pupae</FormLabel>
                  <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
                </FormControl>
              </Grid>
            </Grid>

            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Queen
            </Typography>
            <Grid container direction="row">
              <Grid>
                <FormControl
                  style={{
                    marginTop: "3em",
                    marginRight: "6em",
                    marginBottom: "2em",
                  }}
                >
                  <FormLabel>adult</FormLabel>
                  <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
                </FormControl>
              </Grid>

              <Grid>
                <FormControl
                  style={{
                    marginTop: "3em",
                    marginRight: "6em",
                    marginBottom: "2em",
                  }}
                >
                  <FormLabel>cell</FormLabel>
                  <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
                </FormControl>
              </Grid>

              <Grid>
                <FormControl
                  style={{
                    marginTop: "3em",
                    marginRight: "6em",
                    marginBottom: "2em",
                  }}
                >
                  <FormLabel>replacement</FormLabel>
                  
                  <div>
                    <IconButton>
                    <CheckBoxIcon 
                      checked={status === 1}
                     
                      onClick={(e) => radioHandler(1)} />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>

                     <IconButton>
                       <DisabledByDefaultRoundedIcon 
                      
                       checked={status === 2}
                      onClick={(e) => radioHandler(2)} 
                     />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       
                   
                       </div>
                    
                 
                </FormControl>
              </Grid>
              {status === 1 && (
                <FormControl>
                  <Autocomplete
                    disablePortal
                    sx={{ width: 300, mt: 5, mb: 3 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Cause" />
                    )}
                  />
                  <TextField label="Unique Queen number" variant="standard" />
                </FormControl>
              )}
            </Grid>

            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Swarming tendency
            </Typography>

            <Grid container direction="row">
              <FormControl
                style={{
                  marginTop: "1em",
                  marginRight: "6em",
                  marginBottom: "2em",
                }}
              >
               <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
              </FormControl>
            </Grid>
            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Colony Loss
            </Typography>

            <Grid container direction="row">
              <FormControl
                style={{
                  marginTop: "1em",
                  marginRight: "6em",
                  marginBottom: "2em",
                }}
              >
                <div>
                  <IconButton>
                  <CheckBoxIcon />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>
                     <IconButton>
                   <DisabledByDefaultRoundedIcon />
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       </div>
              </FormControl>
            </Grid>
            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              bees gentleness
            </Typography>

<IconNumbers/>
            
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "primary.main" }}
          >
            <Typography variant="caption">Food</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Feeding
            </Typography>
            <Grid container direction="row">
              <FormControl sx={{ mt: 4 }}>
              <div>
                    <IconButton>
                    <CheckBoxIcon 
                      checked={status === 1}
                      onClick={(e) => radioHandler(1)} />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>

                     <IconButton>
                       <DisabledByDefaultRoundedIcon checked={status === 2}
                      onClick={(e) => radioHandler(2)}/>
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       
                   
                       </div>
              </FormControl>
            </Grid>

            {status === 1 && (
              <FormGroup row>
                <Autocomplete
                  disablePortal
                  options={BeesFood}
                  sx={{ width: 300, mt: 5 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Food" />
                  )}
                />

                <FormGroup style={{ margin: 10 }}>
                  <InputLabel sx={{ mb: 1 }}>Amount (volume) (ltr)</InputLabel>
                  <TextField
                    type="number"
                    value={decimal}
                    variant="outlined"
                    inputProps={{
                      maxLength: 13,
                      step: "1",
                    }}
                    onChange={(e) =>
                      setDecimal(parseFloat(e.target.value).toFixed(1))
                    }
                  />
                </FormGroup>

                <FormGroup style={{ margin: 10 }}>
                  <InputLabel sx={{ mb: 1 }}>Amount (volume) (ltr)</InputLabel>
                  <TextField
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
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "primary.main" }}
          >
            <Typography variant="caption">Disorder</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup row style={{ margin: 20 }}>
              <Varroa />
              <FormGroup row style={{ marginLeft: 20 }}>
                <NaturalVarroa />
              </FormGroup>
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "primary.main" }}
          >
            <Typography variant="caption">Hygiene</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Calculations />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "primary.main" }}
          >
            <Typography variant="caption">Production</Typography>
          </AccordionSummary>

          <AccordionDetails>
            
                      <Honey/>
                      <br></br>
                      <Pollen/>
            
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "primary.main" }}
          >
            <Typography variant="caption">Overall status</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Attention needed
            </Typography>
            <Grid container direction="row">
              <FormControl style={{ marginTop: "1em", marginRight: "6em" }}>
              <div>
                    <IconButton>
                  <CheckBoxIcon 
                      checked={status === 1}
                      onClick={(e) => radioHandler(1)} />
                     </IconButton><Typography variant="buttonlabel" >Yes</Typography>

                     <IconButton>
                       <DisabledByDefaultRoundedIcon checked={status === 2}
                      onClick={(e) => radioHandler(2)}/>
                       </IconButton><Typography variant="buttonlabel" >No</Typography>
                       
                   
                       </div>
              </FormControl>
            </Grid>
            {status === 1 && (
              <Autocomplete
                disablePortal
                options={attention}
                sx={{ width: 300, mt: 5, mb: 2 }}
                renderInput={(params) => <TextField {...params} label="Time" />}
              />
            )}

            <Typography
              variant="caption1"
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
            >
              Total weight
            </Typography>
            <Grid>
              <IconButtons />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Comment"
                variant="standard"
              ></TextField>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </Container>
  );
}
export default CreateInspectionsForm;
