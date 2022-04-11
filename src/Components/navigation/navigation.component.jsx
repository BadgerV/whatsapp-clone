import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './navigation.styles.css';
import LandingPage from '../landing-page/landing-page.component';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

const Navigator = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<LandingPage />} />
            <Route  path = '/sign-in' element = {<SignIn />} />
            <Route  path = '/sign-up' element = {<SignUp />} />
        </Routes>
    )
};

export default Navigator;