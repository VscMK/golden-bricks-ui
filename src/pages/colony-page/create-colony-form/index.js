import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import Header from "../../../components/Header";
import { createTheme } from "@mui/material";
import { Field, Formik } from "formik";
import { Form } from "formik";
import { ThemeProvider } from "@material-ui/core";
import TextFields from "../../../components/inspection-formular-textfield";
import SaveButton from "../../../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getColonies,
  addColony,
  deleteColony,
} from "../../../slices/colony-slice";
import Radio from "@mui/material/Radio";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { RadioGroup } from "formik-mui";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import IconButton from "@material-ui/core/IconButton";
import { getGondolas } from "../../../slices/gondolas-slice/gondolasSlice";

function CreateColonyForm() {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const colonies = useSelector((state) => state.colonies);
  const {gondolas} = useSelector((state) => state.gondolas);
  const singleGondola= gondolas && gondolas.filter(item=>item.gondola_id===parseInt(window.localStorage.getItem("gondolaId")))[0]
  
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
    dispatch(getGondolas())
      .unwrap()
      .then(() => {})
      .catch(() => {
        setLoading(false);
      });
  }, []);

  

  const INITIAL_VALUES = {
    colony_id: "",
    apiary_id: singleGondola.apiary_id,
    gondola_id: singleGondola.gondola_id,
    no_boxes: "",
    queen_id: "2",
    queen_alarm: "",
    
  };

  

  const handleSubmit = (formValue) => {
    
    const { apiary_id, gondola_id, no_boxes, queen_id, queen_alarm } =
      formValue;
    setLoading(true);
    dispatch(
      addColony({
        apiary_id,
        gondola_id,
        no_boxes,
        queen_id,
        queen_alarm,
      })
    )
      .unwrap()
      .then(() => {})
      .catch(() => {
        setLoading(false);
      });
    return navigate("/colony-page");
  };
  const navigateToQueen = () => {
    return navigate("/queen-page");
  };

  return (
    <Container>
      <Header />
      <ThemeProvider theme={theme}>
        <Grid style={{ marginTop: "100px" }}></Grid>

        <Formik initialValues={{ ...INITIAL_VALUES }} onSubmit={handleSubmit}>
          {(formik) => (
            <Form onSubmit={handleSubmit}>
              <SaveButton disabled={loading}>
                {" "}
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  ""
                )}
                colony
              </SaveButton>

              <div style={{ margin: 25 }}>
                <Field
                  name="no_boxes"
                  placeholder="Number of Boxes"
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

                <Grid item xs={3} style={{ marginTop: 20 }}>
                  <FormControl>
                    <FormLabel>queen alarm</FormLabel>

                    <Field component={RadioGroup} name="queen_alarm" row>
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

                <Grid item xs={3} style={{ marginTop: 20 }}>
                  <FormControl>
                    <FormLabel>Queen</FormLabel>
                    <Field component={IconButton} row>
                      <FormControlLabel
                        value="Y"
                        control={
                          <Radio
                            onClick={(e) => navigateToQueen()}
                            onChange={formik.handleChange}
                            icon={<EmojiNatureIcon style={{ fontSize: 60 }} />}
                            checkedIcon={
                              <EmojiNatureIcon style={{ fontSize: 60 }} />
                            }
                          />
                        }
                      />
                    </Field>
                  </FormControl>
                </Grid>
              </div>
            </Form>
          )}
        </Formik>
      </ThemeProvider>
    </Container>
  );
}

export default CreateColonyForm;
