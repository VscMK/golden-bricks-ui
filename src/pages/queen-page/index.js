import React, { useState } from 'react'
import {
  Container,
  Grid,
  Button, 
  makeStyles
 } from '@material-ui/core';
import Header from '../../components/Header';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColonies } from '../../slices/colony-slice';
import QueenTable from './queen-table';


function QueenPage () {
  const [loading, setLoading] = React.useState(false);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const {colonies} = useSelector((state)=>state.colonies)
  
  const singleColonyId = parseInt(window.localStorage.getItem('colonyId'))
  //console.log("scp",singleColonyId)


  const navigateToQueen = (colony_id) => {
    window.localStorage.setItem('colonyId', colony_id);
   
    return navigate('/create-queen');
  }
  const useStyles = makeStyles({
    btn: {
      fontSize: 15,
      backgroundColor: '#f8b133',
      color: 'rgba(0,0,0,.87)',
      '&:hover': {
        background: '#f8b133',
    },
    }
  });
  const classes = useStyles();
  

  React.useEffect (() => {
    setLoading(true);
  dispatch(getColonies())
    .unwrap()
    .then(() => {
    })
    .catch(() => {
      setLoading(false);
    });
  },[]);
  return (
  
    <Container>
         <Header />
         <Grid style={{ marginTop: '100px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            return navigateToQueen(singleColonyId);
          }} >
            + new Queen
          </Button>
        </Grid>

         <Grid>
          <QueenTable/>
        </Grid> 
         
    </Container>
  )
}

export default QueenPage;