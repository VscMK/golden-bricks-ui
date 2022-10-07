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
          height: 60
        },
        root: {
            display: 'flex',
        },
        rightAlign: {
          marginLeft: "auto",
          marginRight: 20,
          marginTop:5
          
        }
      });
    const classes = useStyles();
    
    
    return (
        <div className={classes.root}>
           {/* <DrawerComponent openDrawer={openDrawer} /> */}
           <AppBar className={classes.toolbar} position="absolute">
           
                 
                
                   <Tabs value={selectedTab}
                centered
                   indicatorColor='primary'
                   onChange={(e, value) => setSelectedTab(value)}
                   >
                    <Tab label="GOLDEN BRICKS" href="/profile" style={{ color: 'black', fontWeight: 'bolder', letterSpacing: 5}} />
                     <Tab label='APIARY' href="/airpays-page" />
                     <Tab label='GONDOLA' href="/gondolas-page"/>
                     <Tab label="COLONY" href="/colony-page"/>
                     <Tab label="QUEEN" href="/queen-page"/>
                     <Tab label='INSPECTIONS' href="/inspections-page"/>
                     <Tab label='USERS'  href="/users-page" className={classes.rightAlign}/>
                  
                    
                   </Tabs>
                   <PowerSettingsNewIcon 
                   fontSize='large'sx={{ fontSize: 40, marginLeft: 'auto', paddingRight: '20px', marginTop:"-45px" }}
                   onClick={handleLogout}
                   />
                 
               
           </AppBar>
           </div>
    );
};

export default Header;