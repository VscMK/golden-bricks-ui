import {React, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Header from '../Header'
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (!currentUser) {
    return navigate('/login');
  }

  console.log('PROFILE ::::: ', currentUser);
  return (
    <Container >
        <Header />
        <Grid style={{ marginTop: '100px' }}>
          <Typography variant='h3' >
            Profile: {currentUser.User.first_name}
            </Typography>
          <Typography variant='h3' >
            Email:{currentUser.User.email}
          </Typography>
          <Typography variant='h3'>
            Authorities: {currentUser.User.role_id}
          </Typography>
        </Grid>
      </Container >
  );
};
export default Profile;