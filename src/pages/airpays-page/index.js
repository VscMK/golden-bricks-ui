import {React, useEffect, useState} from 'react';
import {
  Container,
  Grid,
  Typography, 
  Button, 
  TableContainer, 
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles
 } from '@material-ui/core';
import Header from '../../components/Header';
import { getAirpays } from '../../slices/airpaySlice/airpaySlice';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AirpaysPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { airpays } = useSelector((state => state.airpays));

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
      fontSize: 30,
      backgroundColor: '#f8b133',
      color: 'rgba(0,0,0,.87)',
      '&:hover': {
        background: '#f8b133',
    },
    }
  });

  const classes = useStyles();

  return (
    <Container>
         <Header />
         <Grid style={{ marginTop: '70px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            return navigate('/create-apiary');
          }} >
            Add new apiary
          </Button>
        </Grid> 
         <Grid style={{ marginTop: '100px' }}>
         < TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Location&nbsp;</TableCell>
            <TableCell align="right">Number of colonies&nbsp;</TableCell>
            <TableCell align="right">Fence&nbsp;</TableCell>
            <TableCell align="right">Electricity&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {airpays && airpays.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.location_name}</TableCell>
              <TableCell align="right">{row.no_colonies}</TableCell>
              <TableCell align="right">{row.fence}</TableCell>
              <TableCell align="right">{row.electricity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Container>
  )
}

export default AirpaysPage;