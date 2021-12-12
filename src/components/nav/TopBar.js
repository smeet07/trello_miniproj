import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Button, Toolbar} from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    AppBar:{
        background:'None',
    },
    title:{
        flexGrow:1,
    },
    btn:{
        color:'white',
        backgroundColor:'green'
    }
}));
export default function TopBar({setOpenSideMenu}) {
  const classes=useStyles();
  return (
    <div>
      <AppBar position='static' className={classes.AppBar} elevation={0}>
          <Toolbar>
          <h1 className={classes.title}>Daily todo</h1>
          <Button className={classes.btn} onClick={()=>setOpenSideMenu(true)}>Change Background</Button>
          </Toolbar>
      </AppBar>
    </div>
  )
}
