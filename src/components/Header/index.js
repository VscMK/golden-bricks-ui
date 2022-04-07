import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Box, Tabs, Tab} from '@material-ui/core';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { makeStyles } from '@material-ui/core';

const Header = () => {
    
    const [selectedTab, setSelectedTab] = useState();

    const useStyles = makeStyles({
        toolbar: {
          backgroundColor: '#f8b133',
          color: 'rgba(0,0,0,.87)',
        },
      });
    const classes = useStyles();
    
    
    return (
       <React.Fragment>
           <AppBar className={classes.toolbar}>
               <Toolbar>
                   <Typography>
                   <Box sx={{ fontWeight: 'bold', m: 1, letterSpacing: 5}}>
                       GOLDEN BRICKS
                   </Box>
                   </Typography>
                   <Tabs value={selectedTab} 
                   indicatorColor='primary'
                   onChange={(e, value) => setSelectedTab(value)}
                   >
                     <Tab label='AIRPAYS'/>
                     <Tab label='USERS'/>
                     <Tab label='INSPECTIONS'/>
                   </Tabs>
                   <PowerSettingsNewIcon fontSize='large'sx={{ fontSize: 40, marginLeft: 'auto' }} />
               </Toolbar>
           </AppBar>
       </React.Fragment>
    );
};

export default Header;