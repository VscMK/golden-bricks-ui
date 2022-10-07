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
import { Box, InputLabel, MenuItem, OutlinedInput,  } from "@mui/material";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IconButton } from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import IconNumbers from "../../../components/IconNumbers";
import YesNo from "../../../components/YesNoButtons";
import { Form, Formik } from "formik";
import SaveButton from "../../../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInspection } from "../../../slices/inspectionSlice/inspectionSlice";
import { useFormikContext } from "formik";
import { Button, makeStyles } from "@material-ui/core";
import ButtonWrapper from "../../../components/form-components/Button";
import TextFields from "../../../components/inspection-formular-textfield";
import FormControlLabel from "@mui/material/FormControlLabel";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Radio from "@mui/material/Radio";
import InputAdornment from "@mui/material/InputAdornment";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Select } from "formik-mui";
import { Field } from "formik";
import { RadioGroup } from "formik-mui";
import { getColonies } from "../../../slices/colony-slice";
import { getAirpays } from "../../../slices/airpaySlice/airpaySlice";

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
  const [currentButton, setCurrentbutton] = React.useState(null);
  const [getApiary, setApiary]=React.useState([]);
  const [getColony,setColony]=React.useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const {colonies} = useSelector((state) => state.colonies);
  const apiary =[...new Set(colonies.map((item)=>item.apiary_id))];
  const setFieldValue = useFormikContext();
  const [num1, setNum1]= React.useState(0);
  const [num2, setNum2]= React.useState(0);
  const [result, setResult]=React.useState(0);
 
  const _changeNum1=(e)=>{
      if(e.target.validity.valid){
          
          var newNum1 =+ e.target.value;
          setNum1(newNum1)
          setResult(newNum1/num2)
      }
  }

  const _changeNum2=(e)=>{
      if(e.target.validity.valid){
          
          var newNum2 =+ e.target.value;
          setNum2(newNum2)
          setResult(num1/newNum2)
      }
  }
  
  const handleApiary=(event,value)=>{
  
    let colony =colonies.filter((state)=>state.apiary_id===value)
    colony=[... new Set(colony.map((item)=>item.colony_id))];
    colony.sort()
    setColony(colony)
    
  };
  

  React.useEffect (() => {
    setLoading(true);
  dispatch(getAirpays())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  React.useEffect (() => {
    setLoading(true);
  dispatch(getColonies())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  const onButtonClicked = (id) => {
    setCurrentbutton(currentButton === id ? null : id);
  };
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
    apiary_id:"",
    colony_id:"",
    number_of_boxes: "",
    number_occupied_combs: "",
    number_brood_combs: "",
    queen_status: "",
    queen_loss_signs:"",
    eggs:"",
    larvae:"",
    bee_pupae:"",
    adult_queen:"",
    cells:"",
    queen_replacement:"",
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
    const {
      apiary_id,
      colony_id,
      number_of_boxes,
      number_occupied_combs,
      number_brood_combs,
      queen_status,
      queen_loss_signs,
      eggs,
      larvae,
      bee_pupae,
      adult_queen,
      cells,
      queen_replacement,
      queen_status_change_reason,
      swarming_tendency,
      varoa,
      natural_varoa,
      colony_loss,
      pollen,
      honey,
      hygiene,
      bees_gentleness,
      food,
      food_type,
      food_ammount,
      health_condition,
      attention_needed,
      attention_needed_time,
      total_weight,
      comment,
    } = formValue;
    setLoading(true);
    dispatch(
      addInspection({
        apiary_id,
        colony_id,
        number_of_boxes,
        number_occupied_combs,
        number_brood_combs,
        queen_status,
        queen_loss_signs,
        eggs,
        larvae,
        bee_pupae,
        adult_queen,
        cells,
        queen_replacement,
        queen_status_change_reason,
        swarming_tendency,
        varoa,
        natural_varoa,
        colony_loss,
        pollen,
        honey,
        hygiene,
        bees_gentleness,
        food,
        food_type,
        food_ammount,
        health_condition,
        attention_needed,
        attention_needed_time,
        total_weight,
        comment,
      })
    )
      .unwrap()
      .then(() => {
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });

    return navigate("/inspections-page");
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
      backgroundColor: "#f8b133",
      color: "rgba(0,0,0,.87)",
      "&:hover": {
        background: "#f8b133",
      },
    },
  });

  const classes = useStyles();

  return (
    <Container>
      <Header />
      <Grid style={{ marginTop: "100px" }}></Grid>
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{
            ...INITIAL_VALUES,
          }}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <SaveButton disabled={loading}>
                {" "}
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  ""
                )}
             inspection </SaveButton>

             
             
                <Autocomplete  style={{width: "200px", }} select  
                onChange={(event,value)=>{handleApiary(event,value)}}
                name="apiary_id"
                id="apiary"
                getOptionLavel={(apiary)=>` ${apiary}`}
                isOptionEqualToValue={(option, value) => option.apiary_id === value.apiary_id}
                options={apiary}
                  renderOption={(props,apiary)=>(
                    <Box component="li" {...props} key={apiary} value={getApiary}>
                      {apiary}
                    
                    </Box>
                    
                  )}
                    renderInput={(params)=><TextField  style={{marginTop: "10px", marginBottom: "10px"}}  {...params} label="Apiary id"/>}
                />
                 
               
              
                
               <Autocomplete id="colony" 
               getOptionLabel={(getColony)=> ` ${getColony}`}
               options={getColony}
               name="colony_id"
               onChange={formik.handleChange}
               isOptionEqualToValue={(option,value)=>option.apiary_id===value.apiary_id}
               renderOption={(props, getColony)=>(
                <Box  component="li" {...props} key={getColony}>
                {getColony}
              </Box>)}
                renderInput={(params)=><TextField style={{width: "200px"}} {...params} label="Colony id"/>}
              />
               
                
                
                 

                <div style={{ marginTop: "1em" }}>
                <TextFields
                  name="number_of_boxes"
                  label="Number of Boxes"
                  style={{ marginRight: "1em" }}
                  onChange={formik.handleChange}
                />

                <TextFields
                  name="number_occupied_combs"
                  label="Number occupied combs"
                  style={{ marginRight: "1em" }}
                  onChange={formik.handleChange}
                />

                <TextFields
                  name="number_brood_combs"
                  label="Number brood combs"
                  onChange={formik.handleChange}
                />
              </div>

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
                  <Grid container direction="row" spacing={2}>
                    <Grid item xs={3}>
                      <FormControl>
                        <FormLabel>no signs of queen loss</FormLabel>
                        <Field component={RadioGroup} name="queen_loss_signs" row>
                          <FormControlLabel
                            value="Y"
                            control={
                              <Radio
                                onChange={formik.handleChange}
                                icon={<CheckBoxIcon />}
                                checkedIcon={<CheckBoxIcon />}
                              />
                            }
                            label="Yes"
                          />
                          <FormControlLabel
                            value="N"
                            control={
                              <Radio
                                onChange={formik.handleChange}
                                icon={<DisabledByDefaultRoundedIcon />}
                                checkedIcon={<DisabledByDefaultRoundedIcon />}
                              />
                            }
                            label="No"
                          />
                        </Field>
                      </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                      <FormLabel>eggs</FormLabel>
                      <Field component={RadioGroup} name="eggs" row>
                        <FormControlLabel
                          value="Y"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>

                    <Grid item xs={3}>
                      <FormLabel>larve</FormLabel>
                      <Field component={RadioGroup} name="larvae" row>
                        <FormControlLabel
                          value="Y"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>

                    <Grid item xs={3}>
                      <FormLabel>bee pupae</FormLabel>
                      <Field component={RadioGroup} name="bee_pupae" row>
                        <FormControlLabel
                          value="Y"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>
                  </Grid>

                  <Typography
                    variant="caption1"
                    sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                  >
                    Queen
                  </Typography>
                  <Grid container direction="row">
                    <Grid item xs={3}>
                      <FormLabel>adult</FormLabel>
                      <Field component={RadioGroup} name="adult_queen" row>
                        <FormControlLabel
                          value="Y"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>

                    <Grid item xs={3}>
                      <FormLabel>cell</FormLabel>
                      <Field component={RadioGroup} name="cells" row>
                        <FormControlLabel
                          value="Y"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>

                    <Grid item xs={3}>
                      <FormLabel>replacement</FormLabel>
                      <Field
                        component={RadioGroup}
                        name="queen_replacement"
                        row
                      >
                        <FormControlLabel
                          
                          value="Y"
                          control={
                            <Radio
                            checked={status === 1}
                          onClick={(e) => replacementHandler(1)}
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          
                          value="N"
                          control={
                            <Radio
                            checked={status === 2}
                          onClick={(e) => replacementHandler(2)}
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>
                    {status === 1 && (
                      <FormGroup>
                        <TextField
                          label="Cause"
                          variant="standard"
                          name="queen_status_change_reason"
                          onChange={formik.handleChange}
                        />
                        <br></br>
                        <TextField
                          label="Unique Queen number"
                          variant="standard"
                         
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    )}
                  </Grid>

                  <Typography
                    variant="caption1"
                    sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                  >
                    Swarming tendency
                  </Typography>

                  <Grid container direction="row">
                    <Field component={RadioGroup} name="swarming_tendency" row>
                      <FormControlLabel
                        value="Y"
                        control={
                          <Radio
                            onChange={formik.handleChange}
                            icon={<CheckBoxIcon />}
                            checkedIcon={<CheckBoxIcon />}
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="N"
                        control={
                          <Radio
                            onChange={formik.handleChange}
                            icon={<DisabledByDefaultRoundedIcon />}
                            checkedIcon={<DisabledByDefaultRoundedIcon />}
                          />
                        }
                        label="No"
                      />
                    </Field>
                  </Grid>
                  <Typography
                    variant="caption1"
                    sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                  >
                    Colony Loss
                  </Typography>

                  <Grid container direction="row">
                    <Field component={RadioGroup} name="colony_loss" row>
                      <FormControlLabel
                        value="Y"
                        control={
                          <Radio
                            onChange={formik.handleChange}
                            icon={<CheckBoxIcon />}
                            checkedIcon={<CheckBoxIcon />}
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="N"
                        control={
                          <Radio
                            onChange={formik.handleChange}
                            icon={<DisabledByDefaultRoundedIcon />}
                            checkedIcon={<DisabledByDefaultRoundedIcon />}
                          />
                        }
                        label="No"
                      />
                    </Field>
                  </Grid>
                  <Typography
                    variant="caption1"
                    sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                  >
                    bees gentleness
                  </Typography>

                  <Field component={RadioGroup} name="bees_gentleness" row>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={<LooksOneIcon />}
                          checkedIcon={<LooksOneIcon />}
                        />
                      }
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={<LooksTwoIcon />}
                          checkedIcon={<LooksTwoIcon />}
                        />
                      }
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={<Looks3Icon />}
                          checkedIcon={<Looks3Icon />}
                        />
                      }
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={<Looks4Icon />}
                          checkedIcon={<Looks4Icon />}
                        />
                      }
                    />
                  </Field>
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
                   
                      <Field component={RadioGroup} name="food" row>
                        <FormControlLabel
                          checked={status === 1}
                          onClick={(e) => foodHandler(1)}
                          value="Y"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          checked={status === 2}
                          onClick={(e) => foodHandler(2)}
                          value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                            />
                          }
                          label="No"
                        />
                      </Field>
                    
                  </Grid>

                  {choice === 1 && (
                    <FormGroup row>
                      
                       <Field
                    
                    name="food_type"
                   
                     style={{ width: 200, marginTop: 43, marginBottom: 2, height: 54,fontFamily:"Helvetica", fontSize:17, }}
                     component="select"
                     
                    >

                        <option value="Pollen">Pollen</option>
   <option value="Nectar">Nectar</option>
  
   

                    </Field>
                 

                      <FormGroup style={{ margin: 10 }}>
                        <InputLabel sx={{ mb: 1 }}>
                          Amount (volume) (g)
                        </InputLabel>
                        <TextFields
                          name="food_ammount"
                          onChange={formik.handleChange}
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
                    <Varroa onChange={formik.handleChange} name="varoa"/>


                    <FormGroup row style={{ marginLeft: 20 }}>
                    <Grid containter direction="row">
          <Typography
            variant="caption1"
            sx={{ textTransform: "uppercase", letterSpacing: 2 }}
          >
            natural fallen varroa
          </Typography>
  
          <InputLabel sx={{ mb: 1, mt: 3 }}>Total number of varroa</InputLabel>
  
          <Grid container direction="row">
            <FormControl sx={{ width: "25ch", mb: 5 }} variant="outlined">
              <OutlinedInput
                value={num1}
                onChange={_changeNum1}
              />
            </FormControl>
          </Grid>
  
          <InputLabel sx={{ mb: 1, mt: 3 }}>Total number of days</InputLabel>
  
          <Grid container direction="row">
            <FormControl  sx={{ width: "25ch", mb: 5 }} variant="outlined">
              <OutlinedInput
                value={num2}
                onChange={_changeNum2}
                
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
            Number of fallen varroa per day
          </Typography>
  
          <Field name="natural_varoa" value={result} onChange={setResult(result)} ></Field>
            
         
        </Grid>
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
                  <Calculations name="hygiene"onChange={formik.handleChange} />
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
                  <Grid containter direction="row">
                    <Typography
                      variant="caption1"
                      sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                    >
                      Honey
                    </Typography>

                    <InputLabel sx={{ mb: 1, mt: 2 }}>Amount (kg)</InputLabel>

                    <FormGroup style={{ margin: 10 }}>
                      <TextFields
                        name="honey"
                        onChange={formik.handleChange}
                        sx={{ width: "30ch" }}
                      ></TextFields>
                    </FormGroup>
                  </Grid>
                  <br></br>
                  <Grid containter direction="row">
                    <Typography
                      variant="caption1"
                      sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                    >
                      Pollen
                    </Typography>

                    <InputLabel sx={{ mb: 1, mt: 2 }}>Amount (g)</InputLabel>

                    <FormGroup style={{ margin: 10 }}>
                      <TextFields
                        name="pollen"
                        onChange={formik.handleChange}
                        sx={{ width: "30ch" }}
                      ></TextFields>
                    </FormGroup>
                  </Grid>
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
                  <Grid item xs={3}>
                     
                      <Field
                        component={RadioGroup}
                        name="attention_needed"
                        row
                      >
                        <FormControlLabel
                          checked={needed === 1}
                          value="Y"
                          onClick={(e) => attentionHandler(1)}
                          
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<CheckBoxIcon />}
                              checkedIcon={<CheckBoxIcon />}
                              
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                           checked={needed === 2}
                          
                           onClick={(e) => attentionHandler(2)}
                           value="N"
                          control={
                            <Radio
                              onChange={formik.handleChange}
                              icon={<DisabledByDefaultRoundedIcon />}
                              checkedIcon={<DisabledByDefaultRoundedIcon />}
                              name="attention_needed"
                            />
                          }
                          label="No"
                        />
                      </Field>
                    </Grid>
                    {needed === 1 && (
                    <Field
                    name="attention_needed_time"
                     
                     style={{ width: 300, marginTop: 5, marginBottom: 2, height: 40,fontFamily:"Helvetica", fontSize:17, }}
                     component="select"
                     
                    >
                        <option value="Urgent">Urgent</option>
   <option value="1 week">1 week</option>
   <option value="2 week">2 week</option>
   <option value="3 week">3 week</option>
   <option value="4 week">4 week</option>
   <option value="5 week">5 week</option>
   <option value="6 week">6 week</option>
   

                    </Field>
                  

                  )}
                  

                  <br></br>
                  <Typography
                    variant="caption1"
                    sx={{ textTransform: "uppercase", letterSpacing: 2 }}
                  >
                    Total weight
                  </Typography>
                  <Grid>
                  <Field component={RadioGroup} name="total_weight" row>
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={<SentimentSatisfiedAltIcon />}
                          checkedIcon={<SentimentSatisfiedAltIcon />}
                        />
                      }
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={<SentimentNeutralIcon />}
                          checkedIcon={<SentimentNeutralIcon />}
                        />
                      }
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          onChange={formik.handleChange}
                          icon={ <SentimentVeryDissatisfiedIcon />}
                          checkedIcon={ <SentimentVeryDissatisfiedIcon />}
                        />
                      }
                    />
                   
                      
                    
                  </Field>
                   
                  </Grid>
                  <Grid>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      label="Comment"
                      variant="standard"
                      name="comment"
                      onChange={formik.handleChange}
                    ></TextField>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Form>
          )}
        </Formik>
      </ThemeProvider>
    </Container>
  );
}
export default CreateInspectionsForm;
