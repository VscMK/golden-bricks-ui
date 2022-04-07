import React from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../Header';

function LayoutWrapper({ children }) {

    const useStyles = makeStyles({
        pageWrapper: {
            width: '80%'
        }
    })    
    const classes = useStyles();

    return (
    <div>
        <div className={classes.pageWrapper}>
          <Header />
          {children}
        </div>
    </div>
  )
}

export default LayoutWrapper;