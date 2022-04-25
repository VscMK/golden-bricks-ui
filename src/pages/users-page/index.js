import { React, useState, useEffect } from 'react';
import LayoutWrapper from '../../components/layout';
import UserService from '../../services/user-service/userService';
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
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Delete from '@mui/icons-material/Delete';


const UsersPage = () => {

  const [content, setContent] = useState('');
  useEffect(() => {
    UserService.getAllUsers().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  const useStyles = makeStyles({
    btn: {
      fontSize: 30,
      backgroundColor: '#f8b133',
      color: 'rgba(0,0,0,.87)',
      '&:hover': {
        background: '#f8b133',
    },
    },
    centerTable: {
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)'  
    },
  });

  const classes = useStyles();

  const navigate = useNavigate();

  const handleDelete = (userId) => {
    console.log('CLICK ', userId);
  }

  console.log('USERS : ', content);
    

  return (
    <LayoutWrapper>
        <Grid style={{ marginTop: '70px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            return navigate('/register');
          }} >
            Add new user
          </Button>
        </Grid> 

  <Grid className={classes.btn}>
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
          {content && content.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left" style={{width: '20%'}}>{row.first_name}</TableCell>
              <TableCell align="left" style={{width: '20%'}}>{row.last_name}</TableCell>
              <TableCell align="left" style={{width: '20%'}}>{row.email}</TableCell>
              <TableCell align="left" style={{width: '5%'}}>{row.role_id}</TableCell>
              <TableCell align="left" style={{width: '5%'}}><EditIcon color='primary' fontSize="large" /></TableCell>
              <TableCell align="left" style={{width: '5%'}}>
                <Button onClick={e => handleDelete(row.user_id)}>
                  <DeleteIcon sx={{ color: red[500] }} fontSize="large"/>
                </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

      {/* <DataGrid
        rows={content}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </LayoutWrapper>
  );
}

export default UsersPage;