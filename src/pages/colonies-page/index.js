import { React, useState } from 'react'
import { Container, Grid, Button, makeStyles } from '@material-ui/core';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ColoniesTable from './colonies-table';

const ColoniesPage = () => {

  const apiaryId = window.localStorage.getItem('apiaryId');
  const gondolaId = window.localStorage.getItem('gondolaId');
  const [loading, setLoading] = useState(false);
  const { gondolas } = useSelector(state => state.gondolas);
  const id = parseInt(apiaryId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
   <Container>
       <Grid>
           <Header />
       </Grid>
       <Grid style={{ marginTop: '100px' }}>
          <Button  
          className={classes.btn}
          onClick={() => {
            // setLoading(true);
            // dispatch(addColony({ id }))
            //   .unwrap()
            //   .then(() => {
            //     // props.history.push('/airpays-page');
            //     // window.location.reload();
            //   })
            //   .catch(() => {
            //     setLoading(false);
            //   });
              return navigate('/create-colony');
          }} >
            Add new colony
          </Button>
        </Grid>
        <ColoniesTable />
   </Container>
  )
}

export default ColoniesPage;