import { React, useState, useEffect } from 'react';
import LayoutWrapper from '../../components/layout';
import UserService from '../../services/user-service/userService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import Header from '../../components/Header';
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
  Paper
 } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import UsersTable from './users-table';


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
    <Container>
      <Header />
         <Grid style={{ marginTop: '100px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            return navigate('/register');
          }} >
            Add new user
          </Button>
        </Grid> 

    <Grid style={{ marginTop: '70px' }}>
          <UsersTable content={content} handleDelete={handleDelete}/>
    </Grid>

      {/* <DataGrid
        rows={content}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </Container>
  );
}

export default UsersPage;