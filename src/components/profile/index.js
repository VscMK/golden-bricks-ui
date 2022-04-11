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
            Profile {currentUser.username}
            </Typography>
          <Typography variant='h3' >
            Token:{currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </Typography>
          <Typography variant='h3' >
            Id:{currentUser.id}
          </Typography>
          <Typography variant='h3' >
            Email:{currentUser.email}
          </Typography>
          <Typography variant='h3'>
            Authorities:
          </Typography>
        {/* <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul> */}
        </Grid>
      </Container >
  );
};
export default Profile;