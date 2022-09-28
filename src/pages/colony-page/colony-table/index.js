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
import { addColony, deleteColony, getColonies, updateColony } from '../../../slices/colony-slice';
  import { useSelector,useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router';

const ColoniesTable = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colonies} = useSelector((state => state.colonies));



  useEffect (() => {
    setLoading(true);
  dispatch(getColonies())
    .unwrap()
    .then(() => {})
    .catch(() => {
      setLoading(false); 
    });
  },[]);

   const handleEdit = (colonies) => {
    window.localStorage.setItem('colonies', colonies.colony_id);
    // dispatch(updateColony(colonies))
    // .unwrap()
  // .then(() => {
    // })
    // .catch(e => window.alert('ERROR ', e)
    //  );
    
    return navigate('/update-colony');
   }

  
  const navigateToColonies = (colonyId) => {
    window.localStorage.setItem('colony_id', colonyId);
    return navigate('/queen-page');
  }

  const handleDelete = (colonyId) => {
    const id = parseInt(colonyId);
    setLoading(true);
    dispatch(deleteColony(id))
    .unwrap()
    .then(() => {
    setLoading(true);
    dispatch(getColonies())
    .unwrap()
    .then(() => {
    })
    })
    .catch(() => {
      setLoading(false);
    });
  }

  return (
    <Grid style={{ marginTop: '70px' }}>
         < TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell align='left'>Apiary ID</TableCell>
            <TableCell align='left'>Gondola ID</TableCell>
            <TableCell align='left'>Queen ID</TableCell>
            <TableCell align="left">Number of boxes</TableCell>
            <TableCell align="left">Queen alarm&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {colonies && colonies.map((row) => (
            <TableRow key={row.name}>
              <TableCell align='left'>{row.apiary_id}</TableCell>
             <TableCell align='left'>{row.gondola_id}</TableCell>
             <TableCell align="left">{row.queen}</TableCell>
              <TableCell align="left">{row.no_boxes}</TableCell>
              <TableCell align="left">{row.queen_alarm}</TableCell>
             
               <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleEdit(row)}>
                  <EditIcon color='primary' fontSize="large" />
                </Button>
              </TableCell>
              
               <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => navigateToColonies(row.colony_id)}>
                <AddBoxIcon sx={{ color: green[500] }} fontSize="large"/>
                </Button>
              </TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleDelete(row.colony_id)}>
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