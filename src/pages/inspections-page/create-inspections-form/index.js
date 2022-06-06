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
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IconButton } from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import IconNumbers from "../../../components/IconNumbers";
import YesNo from "../../../components/YesNoButtons";
import { Form, Formik } from "formik";
import Formular from "../../../components/inspection-formular";
import SaveButton from "../../../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addInspection } from "../../../slices/inspectionSlice/inspectionSlice";
import { useFormikContext } from 'formik';
import {
  Button, 
  makeStyles
 } from '@material-ui/core';
import ButtonWrapper from "../../../components/form-components/Button";

const BeesFood = [{ label: "Pollen" }, { label: "Nectar" }];
const attention = [
  { label: "Urgent" },
  { label: "1 week" },
  { label: "2 weeks" },
  { label: "3 weeks" },
  { label: "4 weeks" },
  { label: "5 weeks" },
];

function CreateInspectionsForm() {
 
  const [status, setStatus] = React.useState(0);
  const [choice, setChoice] = React.useState(0);
  const [needed, setAttention] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
 
 
  const replacementHandler = (status) => {
    setStatus(status);
  };
  const foodHandler = (choice) => {
    setChoice(choice);
  };
  const attentionHandler = (needed) => {
    setAttention(needed);
  };

  const INITIAL_VALUES = {
    apiary_id: "",
    colony_id: "",
    number_of_boxes: "",
    number_occupied_combs: "",
    number_brood_combs: "",
    queen_status: "",
    queen_status_change_reason: "",
    swarming_tendency: "",
    varoa: "",
    natural_varoa: "",
    colony_loss: "",
    pollen: "",
    honey: "",
    hygiene: "",
    bees_gentleness: "",
    food: "",
    food_type: "",
    food_ammount: "",
    health_condition: "",
    attention_needed: "",
    attention_needed_time: "",
    total_weight: "",
    comment: "",
  };

  

  const handleSubmit = (formValue) => {
    const { apiary_id,colony_id,number_of_boxes,number_occupied_combs,number_brood_combs,queen_status,queen_status_change_reason,swarming_tendency,
    varoa,natural_varoa,colony_loss,pollen,honey,hygiene,bees_gentleness,food,food_type,food_ammount,health_condition,attention_needed,attention_needed_time,
  total_weight,comment} = formValue;
    setLoading(true);
    dispatch(addInspection({ apiary_id,colony_id,number_of_boxes,number_occupied_combs,number_brood_combs,queen_status,queen_status_change_reason,swarming_tendency,
      varoa,natural_varoa,colony_loss,pollen,honey,hygiene,bees_gentleness,food,food_type,food_ammount,health_condition,attention_needed,attention_needed_time,
    total_weight,comment }))
      .unwrap()
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
      return navigate('/inspection/create');
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
      buttonlabel: {
        fontSize: 17,
        fontFamily: "Helvetica",
        color: "gray",
      },
    },
  });
  const useStyles = makeStyles({
    btn: {
      fontSize: 15,
      backgroundColor: '#f8b133',
      color: 'rgba(0,0,0,.87)',
      '&:hover': {
        background: '#f8b133',
    },
    }
     });
  
     const classes = useStyles();
  

  return (
    <Container >
      <Header />
      <Grid style={{ marginTop: '100px' }}>
    
       </Grid>
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{
            ...INITIAL_VALUES,
          }}
          onSubmit={handleSubmit}
          >
          
        
          <Form>
          <SaveButton  disabled={loading} >  {loading ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : ''}</SaveButton>
            <Formular />
            <Accordion sx={{ mt: 2 }}>
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
                      <FormLabel name="queen_status">
                        no signs of queen loss
                      </FormLabel>
                      <YesNo />
                    </FormControl>
                  </Grid>

                  <Grid>
                    <FormControl
                      style={{ marginTop: "3em", marginRight: "6em" }}
                    >
                      <FormLabel name="queen_status">eggs</FormLabel>
                      <YesNo />
                    </FormControl>
                  </Grid>

                  <Grid>
                    <FormControl
                      style={{ marginTop: "3em", marginRight: "6em" }}
                    >
                      <FormLabel name="queen_status">larve</FormLabel>
                      <YesNo />
                    </FormControl>
                  </Grid>

                  <Grid>
                    <FormControl
                      style={{ marginTop: "3em", marginRight: "6em" }}
                    >
                      <FormLabel name="queen_status">bee pupae</FormLabel>
                      <YesNo />
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
                      <FormLabel name="queen_status">adult</FormLabel>
                      <YesNo />
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
                      <FormLabel name="queen_status">cell</FormLabel>
                      <YesNo />
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
                      <FormLabel name="queen_status_change_reason">
                        replacement
                      </FormLabel>

                      <div>
                        <IconButton
                         checked={status === 1}
                         color={status === 1 ? "success" : "default"}
                         onClick={(e) => replacementHandler(1)}>
                          <CheckBoxIcon
                           
                          />
                        </IconButton>
                        <Typography variant="buttonlabel">Yes</Typography>

                        <IconButton checked={status === 2}
                            color={status === 2 ? "error" : "default"}
                            onClick={(e) => replacementHandler(2)}>
                          <DisabledByDefaultRoundedIcon
                            
                          />
                        </IconButton>
                        <Typography variant="buttonlabel">No</Typography>
                      </div>
                    </FormControl>
                  </Grid>
                  {status === 1 && (
                    <FormControl>
                      <TextField label="Cause" variant="standard" />
                      <br></br>
                      <TextField
                        label="Unique Queen number"
                        variant="standard"
                      />
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
                    <YesNo />
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
                    <YesNo />
                  </FormControl>
                </Grid>
                <Typography
                  variant="caption1"
                  sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                >
                  bees gentleness
                </Typography>

                <IconNumbers />
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
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
                      <IconButton  checked={choice === 1}
                          color={choice === 1 ? "success" : "default"}
                          onClick={(e) => foodHandler(1)}>
                        <CheckBoxIcon
                         
                        />
                      </IconButton>
                      <Typography variant="buttonlabel">Yes</Typography>

                      <IconButton checked={choice === 2}
                          color={choice === 2 ? "error" : "default"}
                          onClick={(e) => foodHandler(2)}>
                        <DisabledByDefaultRoundedIcon
                          
                        />
                      </IconButton>
                      <Typography variant="buttonlabel">No</Typography>
                    </div>
                  </FormControl>
                </Grid>

                {choice === 1 && (
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
                      <InputLabel sx={{ mb: 1 }}>
                        Amount (volume) (g)
                      </InputLabel>
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

            <Accordion sx={{ mt: 2 }}>
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

            <Accordion sx={{ mt: 2 }}>
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

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "primary.main" }}
              >
                <Typography variant="caption">Production</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Honey />
                <br></br>
                <Pollen />
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
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
                      <IconButton  checked={needed === 1}
                          color={needed === 1 ? "success" : "default"}
                          onClick={(e) => attentionHandler(1)}>
                        <CheckBoxIcon
                         
                        />
                      </IconButton>
                      <Typography variant="buttonlabel">Yes</Typography>

                      <IconButton checked={needed === 2}
                          color={needed === 2 ? "error" : "default"}
                          onClick={(e) => attentionHandler(2)}>
                        <DisabledByDefaultRoundedIcon
                          
                        />
                      </IconButton>
                      <Typography variant="buttonlabel">No</Typography>
                    </div>
                  </FormControl>
                </Grid>
                {needed === 1 && (
                  <Autocomplete
                    disablePortal
                    options={attention}
                    sx={{ width: 300, mt: 5, mb: 2 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Time" />
                    )}
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
          </Form>
        </Formik>
      </ThemeProvider>
    </Container>
  );
}
export default CreateInspectionsForm;
