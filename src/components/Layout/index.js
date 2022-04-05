import React from 'react'
import { makeStyles } from '@material-ui/core';

function LayoutWrapper({ children }) {

    const useStyles = makeStyles({
        pageWrapper: {
            width: '100%'
        }
    })    
    const classes = useStyles();

    return (
    <div>
        <div className={classes.pageWrapper}>
          {children}
        </div>
    </div>
  )
}

export default LayoutWrapper;