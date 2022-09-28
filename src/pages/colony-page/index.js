import React from 'react'
import {
  Container,
  Grid,
  Button, 
  makeStyles
 } from '@material-ui/core';
import Header from '../../components/Header';

import { useNavigate } from 'react-router-dom';
import ColoniesTable from './colony-table';
import { getGondolas } from '../../slices/gondolas-slice/gondolasSlice';
import { useDispatch, useSelector } from 'react-redux';


function ColonyPage () {
  const [loading, setLoading] = React.useState(false);
  
  const navigate = useNavigate();
  const navigateToColonies = (gondolaId) => {
    window.localStorage.setItem('gondolaId', gondolaId);
    return navigate('/create-colony');
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
  const dispatch = useDispatch();

  const { gondolas } = useSelector((state => state.gondolas));

  const singleGondolaId = parseInt(window.localStorage.getItem("gondolaId"))
console.log(gondolas)
  
  React.useEffect (() => {
    setLoading(true);
  dispatch(getGondolas())
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
            return navigateToColonies(singleGondolaId);
          }} >
            + new Colony
          </Button>
          
        </Grid>
          <Grid>
            <ColoniesTable/> 
          </Grid>
          
        
    </Container>
  )
}

export default ColonyPage;