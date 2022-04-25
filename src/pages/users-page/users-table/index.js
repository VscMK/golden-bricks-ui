import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
// import DataGrid from '@material-ui/core';
import { 
  Grid,
  Typography, 
  Button, 
  TableContainer, 
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
 } from '@material-ui/core';

const UsersTable = (props) => {
  return (
   <Grid>
       < TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{width: '20%'}}>First name</TableCell>
                <TableCell align="left" style={{width: '20%'}}>last name&nbsp;</TableCell>
                <TableCell align="left" style={{width: '20%'}}>Email&nbsp;</TableCell>
                <TableCell align="left" style={{width: '20%'}}>ID&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {props.content && props.content.map((row) => (
                <TableRow key={row.name}>
                {/* <TableCell component="th" scope="row">
                    {row.name}
                </TableCell> */}
                <TableCell align="left" style={{width: '20%'}}>{row.first_name}</TableCell>
                <TableCell align="left" style={{width: '20%'}}>{row.last_name}</TableCell>
                <TableCell align="left" style={{width: '20%'}}>{row.email}</TableCell>
                <TableCell align="left" style={{width: '5%'}}>{row.role_id}</TableCell>
                <TableCell align="left" style={{width: '5%'}}>
                    <Button onClick={e => props.handleDelete(row.user_id)}>
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

export default UsersTable;
