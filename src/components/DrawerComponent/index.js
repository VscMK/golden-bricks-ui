import React from 'react'
import { Drawer, List, makeStyles } from '@material-ui/core';

function DrawerComponent() {

    const useStyles = makeStyles({
        drawer: {
            width: 240,
        },
        drawerPaper: {
            width: 240,
        },
    });

    const classes = useStyles();

  return (
    <Drawer className={classes.drawer}
    variant='permanent'
    anchor='left'
    classes={{ paper: classes.drawerPaper}}
    >
        <List>
        </List>
    </Drawer>
  )
}

export default DrawerComponent;