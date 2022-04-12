import { React, useState, useEffect } from 'react';
import LayoutWrapper from '../../components/layout';
import UserService from '../../services/user-service/userService';
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
    }
  });

  const classes = useStyles();

  const navigate = useNavigate();

  const columns = [
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'last_name', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 90,
    },
    {
      field: 'role_id',
      headerName: 'Role Id',
      width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  console.log('USERS : ', content);
    

  return (
    <LayoutWrapper>
        {/* <ul>
          {content.first_name &&
            content.first_name.map((first_name, index) => <li key={index}>{first_name}</li>)}
        </ul> */}
        {/* <Grid style={{ marginTop: '100px' }} >
        {content && content.map((user)=> {
          return <Typography>{user.first_name}</Typography>;
        })}
        </Grid>
       */}

        <Grid style={{ marginTop: '70px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            return navigate('/register');
          }} >
            Add new user
          </Button>
        </Grid> 

  < TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">last name&nbsp;</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">ID&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content && content.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.role_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

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