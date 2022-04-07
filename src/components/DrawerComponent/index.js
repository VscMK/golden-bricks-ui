import React, { useState } from 'react'
import { Drawer, List, ListItemIcon, ListItemText, makeStyles, Button } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComponent() {

    const [openDrawer, setOpenDrawer] = useState(false);

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
      <div>
        <Drawer className={classes.drawer}
        // variant='temrary'
        open = {openDrawer}
        onClose={() => setOpenDrawer(openDrawer)}
        anchor='left'
        classes={{ paper: classes.drawerPaper}}
        >
          <List>
            <ListItemIcon>
              <ListItemText>
                AIRPAYS
              </ListItemText>
            </ListItemIcon>
            <ListItemIcon>
              <ListItemText>
                USERS
              </ListItemText>
            </ListItemIcon>
            <ListItemIcon>
              <ListItemText>
                INSPECTIONS
              </ListItemText>
            </ListItemIcon>
          </List>
        </Drawer>
        <Button onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </Button>
    </div>
  )
}

export default DrawerComponent;