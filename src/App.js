import React, { useState } from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wrapper from './components/wrapper';
import Calls from './components/contacts/calls/index';

import LoginPage from './components/loginPage'
import SignUp from './components/signUp'
import Project from './components/project';
import Homepage from './components/homepage';
import JoinPage from './components/joinPage';
export default function App() {

  return (

    <BrowserRouter>
      <Routes>

          <Route path="signup" element={<SignUp />} />
          <Route exact path="pr/:id/:listid" element={<Project/>} />
          <Route exact path="pr/:id" element={<Calls />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="joinpage/:id" element={<JoinPage />}></Route>
          <Route exact path="/" element={<Homepage />}>


        
        </Route>
      </Routes>
    </BrowserRouter>

  );

  //ms teams page
  // return <Calls />;
}
ReactDOM.render(<App />, document.getElementById("root"));

