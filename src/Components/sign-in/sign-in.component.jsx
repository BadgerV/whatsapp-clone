import React from 'react';
import { auth } from '../../utils/firebase';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './sign-in.styles.css';
import {FaUserCircle} from 'react-icons/fa';
import { createUserDocumentFromAuth } from '../../utils/firebase';
import SignUp from '../sign-up/sign-up.component';



const SignIn = () => {
    const [signInEmail, setSignInEmail ] = useState("");
    const [signInPassword, setSignInPassword] = useState("");  

    
    const signIn = async () => {
        try {
            const {user} = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
            
            createUserDocumentFromAuth(user)
            
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
        

        <span className='sign-up-account'>I do not have an account <Link to ='/' className='sign-up-sign-in'>Sign Up</Link></span>

    </div>
    </div>
    )
}

export default SignIn;