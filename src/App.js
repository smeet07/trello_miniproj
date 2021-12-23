import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from './components/wrapper';
import Calls from './components/contacts/calls/index';
import Navigation from './components/nav/Navigation';

const useStyles = makeStyles((theme) => ({
  // root:{
  //   backgroundColor:'#003153',
  // }
}));
export default function App() {
  const classes = useStyles();
  const [backgroundImage, setbackgroundImage] = useState('#003153');
  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundImage,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Navigation setbackgroundImage={setbackgroundImage} />
      <Wrapper />
    </div>
  );

  //ms teams page
  // return <Calls />;
}
