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
   } from '@material-ui/core';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import { red } from '@mui/material/colors';
  import { getAirpays, deleteAirpay } from '../../../slices/airpaySlice/airpaySlice';
  import { useSelector,useDispatch } from 'react-redux';

const ApiarysTable = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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

  const handleDelete = (apiaryId) => {
    console.log('DEL:ETE APIARY :: ', apiaryId);
    const id = parseInt(apiaryId);
    setLoading(true);
  dispatch(deleteAirpay({id}))
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  }

  const handleEdit = (apiary) => {
    console.log('EDIT APIARY', apiary);
    
  }

    console.log('OD TABELA ', airpays);
  return (
    <Grid style={{ marginTop: '70px' }}>
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
          {airpays && airpays.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.location_name}</TableCell>
              <TableCell align="left">{row.no_colonies}</TableCell>
              <TableCell align="left">{row.fence}</TableCell>
              <TableCell align="left">{row.electricity}</TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleEdit(row)}>
                  <EditIcon color='primary' fontSize="large" />
                </Button>
              </TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleDelete(row.apiary_id)}>
                  <DeleteIcon sx={{ color: red[500] }} fontSize="large"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  )
}

export default ApiarysTable;