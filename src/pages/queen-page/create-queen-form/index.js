import * as React from 'react';
import { Button, Container, Grid, Input, TextField, 
   } from '@material-ui/core';
import Header from '../../../components/Header';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import { Form } from 'formik';
import { ThemeProvider } from '@material-ui/core';
import TextFields from '../../../components/inspection-formular-textfield';
import SaveButton from '../../../components/SaveButton';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getColonies,addColony,deleteColony } from '../../../slices/colony-slice';
import { addQueen } from '../../../slices/queenSlice';
import Radio from '@mui/material/Radio'
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { RadioGroup, Select } from "formik-mui";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { width } from '@mui/system';



function CreateQueenForm(){
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {colonies}= useSelector((state)=>state.colonies)
  
  const singleColony= colonies && colonies.filter(item=>item.colony_id===parseInt(window.localStorage.getItem('colonyId')))[0]
  console.log(colonies)

  const [value, setValue] = React.useState(null);

  

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
  React.useEffect(() => {
    setLoading(true);
    dispatch(getColonies())
      .unwrap()
      .then(() => {})
      .catch(() => {
        setLoading(false);
      });
  }, []);


  const INITIAL_VALUES={
    
    apiary_id: singleColony.apiary_id,
    gondola_id: singleColony.gondola_id ,
    colony_id: singleColony.colony_id,
    color_plate: "",
    number_on_plate: 2,
    queen_number: "MK-9-1-275-2019",
    clipped: "",
    mating_status: "",
    marked: ""
  }

  const handleSubmit=(formValue)=>{
    const{
      apiary_id,
      gondola_id,
      colony_id,
      color_plate,
    number_on_plate,
    queen_number,
    clipped,
    mating_status,
    marked
    }=formValue;
    setLoading(true);
    dispatch(addQueen({
      apiary_id,gondola_id,colony_id,
      color_plate,
    number_on_plate,
    queen_number,
    clipped,
    mating_status,
    marked
    }))
    .unwrap()
    .then(()=>{})
    .catch(()=>{
      setLoading(false);
    })
    return navigate("/queen-page");
    
  }





return (
  <Container>
    <Header />
    <ThemeProvider theme={theme}>
      <Formik initialValues={{ ...INITIAL_VALUES }} onSubmit={handleSubmit}>
        {(formik) => (
          <Form onSubmit={handleSubmit}>
            <Grid style={{ marginTop: "120px" }}></Grid>
            <SaveButton disabled={loading}>
              {" "}
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                ""
              )}{" "}
              queen{" "}
            </SaveButton>

            <div style={{ marginTop: 30 }}>
              <Typography
                variant="caption1"
                sx={{
                  fontFamily: "Helvetica",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Queen color palette
              </Typography>

              <Field
                component={RadioGroup}
                name="color_plate"
                row
                style={{ marginBottom: 50 }}
              >
                <FormControlLabel
                  value="white"
                  labelPlacement="bottom"
                  label="white"
                  control={
                    <Radio color="default" onChange={formik.handleChange} />
                  }
                />
                <FormControlLabel
                  value="yellow"
                  labelPlacement="bottom"
                  label="yellow"
                  control={
                    <Radio color="warning" onChange={formik.handleChange} />
                  }
                />
                <FormControlLabel
                  value="red"
                  labelPlacement="bottom"
                  label="red"
                  control={
                    <Radio color="error" onChange={formik.handleChange} />
                  }
                />
                <FormControlLabel
                  value="green"
                  labelPlacement="bottom"
                  label="green"
                  control={
                    <Radio color="success" onChange={formik.handleChange} />
                  }
                />
                <FormControlLabel
                  value="blue"
                  labelPlacement="bottom"
                  label="blue"
                  control={<Radio onChange={formik.handleChange} />}
                />
              </Field>

              <Grid container direction="row">
                <Grid item xs={3}>
                  <Typography
                    variant="caption1"
                    sx={{
                      fontFamily: "Helvetica",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    clipped
                  </Typography>

                  <Field
                    component={RadioGroup}
                    name="clipped"
                    row
                    style={{ marginTop: 6 }}
                  >
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
                  <Typography
                    variant="caption1"
                    sx={{
                      fontFamily: "Helvetica",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    marked
                  </Typography>

                  <Field
                    component={RadioGroup}
                    name="marked"
                    row
                    style={{ marginTop: 6 }}
                  >
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

                <Grid item xs={5}>
                  <Typography
                    variant="caption1"
                    sx={{
                      fontFamily: "Helvetica",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    Mating status
                  </Typography>

                  <Field
                    component={RadioGroup}
                    name="mating_status"
                    row
                    style={{ marginBottom: 50 }}
                  >
                    <FormControlLabel
                      value="virgin"
                      labelPlacement="bottom"
                      label="Virgin"
                      control={
                        <Radio color="warning" onChange={formik.handleChange} />
                      }
                    />
                    <FormControlLabel
                      value="fertilized/mated"
                      labelPlacement="bottom"
                      label="Fertilized/Mated"
                      control={
                        <Radio color="warning" onChange={formik.handleChange} />
                      }
                    />
                    <FormControlLabel
                      value="supersedure"
                      labelPlacement="bottom"
                      label="Supersedure"
                      control={
                        <Radio color="warning" onChange={formik.handleChange} />
                      }
                    />
                  </Field>
                </Grid>
              </Grid>
              
              <Grid container direction='row'>
              <Grid item md={6}>
                <TextField
                  name="number_on_plate"
                  placeholder="Number on plate"
                  type={"number"}
                  variant="outlined"
                  style={{
                    width: 200,
                    marginTop: 5,
                    marginBottom: 2,
                    height: 40,
                    fontFamily: "Helvetica",
                    fontSize: 20,
                  }}
                  onChange={formik.handleChange}
                />
              </Grid>
              
              <Grid item md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Queen's age"
                 
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              </Grid>
              </Grid>
              </div>
          </Form>
        )}
      </Formik>
    </ThemeProvider>
  </Container>
);


}



export default CreateQueenForm;