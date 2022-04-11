import React from 'react';
import { auth } from '../../utils/firebase';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { signUserInWIthEmailAndPassword } from '../../utils/firebase';
import './sign-in.styles.css';
import {FaUserCircle} from 'react-icons/fa';



const SignIn = () => {
    const [signInEmail, setSignInEmail ] = useState("");
    const [signInPassword, setSignInPassword] = useState("");  


    
    const signIn = async () => {
        try {
            const {user} = await signUserInWIthEmailAndPassword(signInEmail, signInPassword);
            
            
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <div className='sign-up-background'>
        <div className='sign-up-container'>
        <FaUserCircle className='sign-up-icon'/>
        <h1 className='sign-up-sign-up-text'>Sign Up Now</h1>

        <input type='text' placeholder = 'Email' name='email' className='sign-in-input' onChange={(event) => setSignInEmail(event.target.value)}/>
        <input type='text' placeholder = 'Password' name='password' className='sign-in-input' onChange={(event) => setSignInPassword(event.target.value)} />
        

        <button className='sign-up-button sign-up' onClick={signIn}>Sign In</button>
        

        <span className='sign-up-account'>I do not have an account <Link to ='/sign-up' className='sign-up-sign-in'>Sign Up</Link></span>

    </div>
    </div>
    )
}

export default SignIn;