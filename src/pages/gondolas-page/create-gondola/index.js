import { React, useEffect, useState } from 'react';
import {
    Grid,
    Button, 
    TableContainer, 
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    makeStyles,
    Container,
    Typography,
   } from '@material-ui/core';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import AddBoxIcon from '@mui/icons-material/AddBox';
  import { red, green } from '@mui/material/colors';
  import { getAirpays, deleteAirpay } from '../../../slices/airpaySlice/airpaySlice';
  import { useSelector,useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router';
import Header from '../../../components/Header';
import { addGondola } from '../../../slices/gondolas-slice/gondolasSlice';

const CreateGondola = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { airpays } = useSelector((state => state.airpays));
  const singleApiary= airpays && airpays.filter(item=>item.apiary_id===parseInt(window.localStorage.getItem("apiaryId")))[0]

  const apiaryId = window.localStorage.getItem('apiaryId');
  const id = parseInt(apiaryId);

  const no_colonies = window.localStorage.getItem('no_colonies');
  const nc = parseInt(no_colonies);
console.log("nc",no_colonies)
  useEffect (() => {
    setLoading(true);
  dispatch(getAirpays())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  const useStyles = makeStyles({
    btn: {
        marginLeft: 5,
        marginBottom: 15,
      fontSize: 15,
      backgroundColor: '#f8b133',
      color: 'rgba(0,0,0,.87)',
      '&:hover': {
        background: '#f8b133',
    },
    }
  });
  const classes = useStyles();

  const navigateToColonies = (apiary_id,no_colonies) => {
    window.localStorage.setItem('apiary_id', apiary_id);
    window.localStorage.setItem('no_colonies', no_colonies);
    return navigate('/gondolas-page');
  }
 
  return (
    <Container>
    <Header />
    <Grid style={{ marginTop: '100px' }}>
    <Grid style={{ marginTop: '70px' }}>
        <Typography >Confirm Apiary</Typography>
        <Button  
          className={classes.btn}
          onClick={() => {
           
            setLoading(true);
             dispatch(addGondola({ id,nc }))
               .unwrap()
               .then(() => {
                 //props.history.push('/airpays-page');
                 // window.location.reload();
               })
               .catch(() => {
                 // setLoading(false);
               });
            return navigateToColonies(id,nc);
          }} >
           create gondola
          </Button>

          <Button  
          
          className={classes.btn}
          onClick={() => {
           
            
              return navigate('/airpays-page');
          }} >
          change apiary
          </Button>
         < TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Location&nbsp;</TableCell>
            <TableCell align="left">Number of colonies&nbsp;</TableCell>
            <TableCell align="left">Fence&nbsp;</TableCell>
            <TableCell align="left">Electricity&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left">{singleApiary.name}</TableCell>
              <TableCell align="left">{singleApiary.location_name}</TableCell>
              <TableCell align="left">{singleApiary.no_colonies}</TableCell>
              <TableCell align="left">{singleApiary.fence}</TableCell>
              <TableCell align="left">{singleApiary.electricity}</TableCell>
             
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    </Container>
  )
}

export default CreateGondola;