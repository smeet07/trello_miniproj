import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wrapper from './components/wrapper';
import Calls from './components/contacts/calls/index';

import LoginPage from './components/loginPage'
import SignUp from './components/signUp'
import Project from './components/project';

const useStyles = makeStyles((theme) => ({
  // root:{
  //   backgroundColor:'#003153',
  // }
}));
export default function App() {
  const classes = useStyles();
  const [backgroundImage, setbackgroundImage] = useState('#003153');
  return (

    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Project />} /> */}
          <Route path="l" element={<Project />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="pr" element={<Calls />} />

        <Route exact path="/" element={<LoginPage />}>

        
        </Route>
      </Routes>
    </BrowserRouter>

  );

  //ms teams page
  // return <Calls />;
}
ReactDOM.render(<App />, document.getElementById("root"));

