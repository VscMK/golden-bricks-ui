import { React, useState, useEffect } from 'react';
import LayoutWrapper from '../../components/layout';
import UserService from '../../services/user-service/userService';
// import DataGrid from '@material-ui/core';
import { Grid, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

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
        <Grid style={{ marginTop: '100px' }} >
        {content && content.map((user)=> {
          return <Typography>{user.first_name}</Typography>;
        })}
        </Grid>
        <Grid>
          <Button  onClick={() => {
            return navigate('/register');
          }} >
            Add new user
          </Button>
        </Grid>

      {/* <DataGrid
        rows={content}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </LayoutWrapper>
  )
}

export default UsersPage;