import React, { useContext } from 'react';
import HomePage from '../home-page/homepage.component';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signUserOut } from '../../utils/firebase';
import './sign-up.styles.css';



const SignUp = () => {

    signUserOut();


    const [registerEmail, setRegisterEmail] = useState("");
    const [displayName, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState(""); 
    
    
    const register = async () => {
        try {
            const {user} = await createAuthUserWithEmailAndPassword(registerEmail, registerPassword);
            
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });

        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div className='sign-up-background'>
        <div className='sign-up-container'>
        <FaUserCircle className='sign-up-icon'/>
        <h1 className='sign-up-sign-up-text'>Sign Up Now</h1>

        <input type='text' required placeholder = 'Email' name='email' className='sign-in-input' onChange={(event) => setRegisterEmail(event.target.value)}/>
        <input type='text' required placeholder = 'Username' name='username' className='sign-in-input' onChange={(event) => setRegisterUsername(event.target.value)}/>
        <input type='password' required placeholder = 'Password' name='password' className='sign-in-input' onChange={(event) => setRegisterPassword(event.target.value)}/>

        <button className='sign-up-button sign-up' onClick={register} >Sign Up</button>
        <h2 className='sign-up-or-text'>OR</h2>
        <button className='sign-up-button twitter-button'>Login With Twitter</button>

        <span className='sign-up-account'>I do not have an account <Link to ='/sign-in' className='sign-up-sign-in'>Sign In</Link></span>

    </div>
    </div>
    )
}

export default SignUp;