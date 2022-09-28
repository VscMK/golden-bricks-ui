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
import { deleteQueen, getQueen } from '../../../slices/queenSlice';

const QueenTable = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {queen} = useSelector((state => state.queen));

  const {colonies} = useSelector((state=>state.colonies))
  
  const singleColony= colonies && colonies.filter(item=>item.colony_id===parseInt(window.localStorage.getItem("colonyId")))[0]

  useEffect (() => {
    setLoading(true);
  dispatch(getQueen())
    .unwrap()
    .then(() => {})
    .catch(() => {
      setLoading(false); 
    });
  },[]);

   const handleEdit = (queen) => {
    window.localStorage.setItem('queen', queen.queen_id);
    // dispatch(updateColony(colonies))
    // .unwrap()
  // .then(() => {
    // })
    // .catch(e => window.alert('ERROR ', e)
    //  );
    
    return navigate('/update-queen');
   }

  
  const navigateToColonies = (queen_id) => {
    window.localStorage.setItem('queen_id', queen_id);
    return navigate('/inspections-page');
  }

  const handleDelete = (queen_id) => {
    const id = parseInt(queen_id);
    setLoading(true);
    dispatch(deleteQueen(id))
    .unwrap()
    .then(() => {
    setLoading(true);
    dispatch(getQueen())
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
            <TableCell align='left'>Colony ID</TableCell>
            <TableCell align="left">Color Plate</TableCell>
            <TableCell align='left'>Number on plate</TableCell>
            <TableCell align="left">Queen number</TableCell>
            <TableCell align='left'>Clipped</TableCell>
            <TableCell align='left'>Mating status</TableCell>
            <TableCell align='left'>Marked</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {queen && queen.map((row) => (
            <TableRow key={row.name}>
              <TableCell align='left'>{singleColony.apiary_id}</TableCell>
             <TableCell align='left'>{singleColony.gondola_id}</TableCell>
             <TableCell align='left'>{singleColony.colony_id}</TableCell>
             <TableCell align="left">{row.queen_id}</TableCell>
              <TableCell align="left">{row.color_plate}</TableCell>
              <TableCell align="left">{row.queen_number}</TableCell>
              <TableCell align="left">{row.clipped}</TableCell>
              <TableCell align="left">{row.mating_status}</TableCell>
              <TableCell align="left">{row.marked}</TableCell>
               <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleEdit(row)}>
                  <EditIcon color='primary' fontSize="large" />
                </Button>
              </TableCell>
              
               <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => navigateToColonies(row.queen_id)}>
                <AddBoxIcon sx={{ color: green[500] }} fontSize="large"/>
                </Button>
              </TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleDelete(row.queen_id)}>
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

export default QueenTable;