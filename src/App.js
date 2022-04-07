import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FirstHalf from './Components/firsthalf-component/FirstHalf.component';
import SecondHalf from './Components/secondhalf-component/SecondHalf.component';
import { onAuthStateChanged } from 'firebase/auth';
import SignIn from './Components/sign-in/sign-in.component';
import SignUp from './Components/sign-up/sign-up.component';
import { auth } from './utils/firebase';
import HomePage from './Components/home-page/homepage.component';

const App = () => {
  return(
        <div className="app">
          <HomePage />

          {/* <Routes>
            <Route exact path = '/' element = {<SignUp />}></Route>
            <Route path = '/sign-in' element = {<SignIn />}></Route>
          </Routes> */}
        </div>
  )
}

export default App;