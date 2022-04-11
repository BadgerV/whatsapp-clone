import React from "react";
import './landing-page.styles.css';
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link } from "react-router-dom";
import { signUserOut } from "../../utils/firebase";
import {collectUserData} from '../../utils/firebase'


const LandingPage = () => {

    
    const user = useContext(UserContext);
    const currentUser = user.currentUser;
    

        return(
        <div className="landing-page_container">

            {
                currentUser ? 
                <div>
                    <button className="landing-page_button signout-button" onClick={signUserOut}>Sign Out</button>
                <h1 className="landing-page_h1">Welcome User</h1>
                <button className="landing-page_button continue-button">Continue to Whatsapp</button> 
                </div>
                :
            <div className="mini-container">
            <Link to='/sign-in'><button className="landing-page_button login-button">Login</button></Link>
            <Link to = '/sign-up'><button className="landing-page_button signup-button">Signup</button></Link>
            </div> 
            }
            


            

        

             
        </div>
    )   
}

export default LandingPage;