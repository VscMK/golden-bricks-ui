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
import { getGondolas } from '../../../slices/gondolas-slice/gondolasSlice';

const GondolasTable = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gondolas } = useSelector((state => state.gondolas));

  useEffect (() => {
    setLoading(true);
  dispatch(getGondolas())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);

  const handleEdit = (apiary) => {
    window.localStorage.setItem('apiary', apiary.apiary_id);
    // dispatch(saveApiary(apiary));
    // // .unwrap()
    // .then(() => {
    // })
    // .catch(e => window.alert('ERROR ', e)
    // );
    return navigate('/update-apiary');
  }

  const navigateToColonies = (apiary) => {
    window.localStorage.setItem('apiaryId', apiary.apiary_id);
    // dispatch(saveApiary(apiary));
    // // .unwrap()
    // .then(() => {
    // })
    // .catch(e => window.alert('ERROR ', e)
    // );
    return navigate('/gondolas-page');
  }

  const handleDelete = (gondolaId) => {
    const id = parseInt(gondolaId);
    // setLoading(true);
    // dispatch(deleteAirpay(id))
    // .unwrap()
    // .then(() => {
    // setLoading(true);
    // dispatch(getAirpays())
    // .unwrap()
    // .then(() => {
    // })
    // })
    // .catch(() => {
    //   setLoading(false);
    // });
  };

  return (
    <Grid style={{ marginTop: '70px' }}>
         < TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Apiary</TableCell>
            <TableCell align="left">Id&nbsp;</TableCell>
            <TableCell align="left">Number of colonies&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {gondolas && gondolas.map((row) => (
            <TableRow key={row.name}>
                <TableCell align="left">{row.apiary_id}</TableCell>
                <TableCell align="left">{row.gondola_id}</TableCell>
                <TableCell align="left">{row.Colonies.length}</TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleEdit(row)}>
                  <EditIcon color='primary' fontSize="large" />
                </Button>
              </TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => navigateToColonies(row)}>
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

export default GondolasTable;