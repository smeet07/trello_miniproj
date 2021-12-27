import React, { useState } from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wrapper from './components/wrapper';
import Calls from './components/contacts/calls/index';

import LoginPage from './components/loginPage'
import SignUp from './components/signUp'
import Project from './components/project';


export default function App() {

  return (

    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Project />} /> */}
          <Route path="l" element={<Project />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="pr/:id" element={<Calls />} />
          {/* <Route path='/pr/:id' render={(props) => <Calls {...props}/>}/> */}
        <Route exact path="/" element={<LoginPage />}>

        
        </Route>
      </Routes>
    </BrowserRouter>

  );

  //ms teams page
  // return <Calls />;
}
ReactDOM.render(<App />, document.getElementById("root"));

