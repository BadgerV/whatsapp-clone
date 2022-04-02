import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FirstHalf from './Components/firsthalf-component/FirstHalf.component';
import SecondHalf from './Components/secondhalf-component/SecondHalf.component';
import SignIn from './Components/sign-in/sign-in.component';
import SignUp from './Components/sign-up/sign-up.component';

const App = () => {
  return(
        <div className="app">
          <Routes>
            <Route exact path = '/signup' element = {<SignUp />}></Route>
            <Route exact path = '/signin' element = {<SignIn />}></Route>
          </Routes>
        </div>
  )
}

export default App;