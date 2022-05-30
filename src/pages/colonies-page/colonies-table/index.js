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
  import AddBoxIcon from '@mui/icons-material/AddBox';
  import { red, green } from '@mui/material/colors';
  import { useSelector,useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router';
import { getColonies } from '../../../slices/coloniesSlice/coloniesSlice';

const ColoniesTable = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiaryId = window.localStorage.getItem('apiaryId');
  const gondolaId = window.localStorage.getItem('gondolaId');
  const { colonies } = useSelector(state => state.colonies);

  useEffect (() => {
    setLoading(true);
  dispatch(getColonies())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  console.log('COLONIES :: ', colonies);

  const handleEdit = (colony) => {
    window.localStorage.setItem('colony', colony.colony_id);
    // dispatch(saveApiary(apiary));
    // // .unwrap()
    // .then(() => {
    // })
    // .catch(e => window.alert('ERROR ', e)
    // );
    return navigate('/update-colony');
  }

  const navigateToColonies = (gondolaId) => {
    window.localStorage.setItem('gondolaId', gondolaId);
    return navigate('/colonies-page');
  }

   const handleDelete = (gondolaId) => {
//     const id = parseInt(gondolaId);
//     setLoading(true);
//     dispatch(deleteColony(id))
//     .unwrap()
//     .then(() => {
//     setLoading(true);
//     dispatch(getGondolas())
//     .unwrap()
//     .then(() => {
//     })
//     })
//     .catch(() => {
//       setLoading(false);
//     });
   };

  return (
    <Grid style={{ marginTop: '70px' }}>
         < TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Apiary ID</TableCell>
            <TableCell align="left">Gondola ID&nbsp;</TableCell>
            <TableCell align="left">Colony ID&nbsp;</TableCell>
            <TableCell align="left">Number of boxes&nbsp;</TableCell>
            <TableCell align="left">Queen Id&nbsp;</TableCell>
            <TableCell align="left">Queen alarm&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {colonies && colonies.map((row) => (
            <TableRow key={row.name}>
                <TableCell align="left">{apiaryId}</TableCell>
                <TableCell align="left">{gondolaId}</TableCell>
                <TableCell align="left">{row.colony_id}</TableCell>
                <TableCell align="left">{row.no_boxes}</TableCell>
                <TableCell align="left">{row.queen_id}</TableCell>
                <TableCell align="left">{row.queen_alarm}</TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleEdit(row)}>
                  <EditIcon color='primary' fontSize="large" />
                </Button>
              </TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => navigateToColonies(row.gondola_id)}>
                  <AddBoxIcon sx={{ color: green[500] }} fontSize="large"/>
                </Button>
              </TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleDelete(row.gondola_id)}>
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

export default ColoniesTable;