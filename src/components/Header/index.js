import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Box, Tabs, Tab, Button} from '@material-ui/core';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/authSlice/authSlice';
import { useNavigate } from "react-router-dom";


const Header = (props) => {
    
    const [selectedTab, setSelectedTab] = useState();
    const { isLoggedIn } = useSelector((state => state.auth));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
          return navigate('/');
      }
    },[isLoggedIn]);

    const handleLogout = () => {
      dispatch(logout())
      .unwrap()
      .then(() => {
        props.history.push('/');
        window.location.reload();
      })
      .catch(() => {
      });
    }

    const navigateToProfilePage = () => {
      return navigate('/profile');
    }

    const useStyles = makeStyles({
        toolbar: {
          backgroundColor: '#f8b133',
          color: 'rgba(0,0,0,.87)',
        },
        root: {
            display: 'flex',
        },
      });
    const classes = useStyles();
    
    
    return (
        <div style={{display: 'flex'}}>
           {/* <DrawerComponent openDrawer={openDrawer} /> */}
           <AppBar className={classes.toolbar} position='absolute'>
               <Toolbar>
                 <Button onClick={navigateToProfilePage}>
                   <Typography>
                   <Box sx={{ fontWeight: 'bold', m: 1, letterSpacing: 5}}>
                       GOLDEN BRICKS
                   </Box>
                   </Typography>
                   </Button>
                   <Tabs value={selectedTab}
                   centered
                   indicatorColor='primary'
                   onChange={(e, value) => setSelectedTab(value)}
                   >
                     <Tab label='APIARYS' href="/airpays-page" />
                     <Tab label='USERS' href="/users-page"/>
                     <Tab label='INSPECTIONS' href="/inspections-page"/>
                   </Tabs>
                   <PowerSettingsNewIcon 
                   fontSize='large'sx={{ fontSize: 40, marginLeft: 'auto' }}
                   onClick={handleLogout}
                   />
               </Toolbar>
           </AppBar>
           </div>
    );
};

export default Header;