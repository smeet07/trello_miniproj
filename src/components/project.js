import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Wrapper from './wrapper';
import Navigation from './nav/Navigation';

const useStyles=makeStyles((theme)=>({

}));
export default function Project() {
  const classes=useStyles();
  const [backgroundImage, setbackgroundImage] = useState('#464775')
  return (
    <div className={classes.root}
    style={{backgroundColor:backgroundImage ,backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}}
    >
      <Navigation setbackgroundImage={setbackgroundImage}/>
      <Wrapper/>
    </div>
  )
}
