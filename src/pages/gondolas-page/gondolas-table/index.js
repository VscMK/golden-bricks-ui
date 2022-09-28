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
  import { updateApiary } from '../../../slices/airpaySlice/airpaySlice';
import  { gondolasSlice,deleteGondola, getGondolas } from '../../../slices/gondolas-slice/gondolasSlice';
import { getAirpays } from '../../../slices/airpaySlice/airpaySlice';


const GondolasTable = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gondolas } = useSelector((state => state.gondolas));
  const { airpays } = useSelector((state => state.airpays));
  
  const apiary= useSelector((state=>state.apiary))
  const singleApiary = airpays && airpays.filter(item=> item.apiary_id===parseInt(window.localStorage.getItem("apiaryId")))[0];
  
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

  const handleEdit = (apiary) => {
    window.localStorage.setItem('apiary', apiary.apiary_id);
    //  dispatch(updateApiary(apiary))
    // .unwrap()
    // .then(() => {
    // })
    // .catch(e => window.alert('ERROR ', e)
    //  );
    return navigate('/update-apiary');
  }

  const navigateToColonies = (gondolaId) => {
    window.localStorage.setItem('gondolaId', gondolaId);
    return navigate('/colony-page');
  }

  const handleDelete = (gondolaId) => {
    const id = parseInt(gondolaId);
    setLoading(true);
    dispatch(deleteGondola(id))
    .unwrap()
    .then(() => {
    setLoading(true);
    dispatch(getGondolas())
    .unwrap()
    .then(() => {
    })
    })
    .catch(() => {
      setLoading(false);
    });
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
                <TableCell align="left">{singleApiary.no_colonies}</TableCell>
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

export default GondolasTable;