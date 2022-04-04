import React from 'react';
import { AppBar, Typography, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const Header = () => {
    
    console.log('HEADER');

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
               </Toolbar>
           </AppBar>
       </React.Fragment>
    );
};

export default Header;