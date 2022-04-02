import React from 'react';
import {Link} from 'react-router-dom';
import './sign-in.styles.css';
import {FaUserCircle} from 'react-icons/fa';
import SignUp from '../sign-up/sign-up.component';


const SignIn = () => {
    return(
        <div className='sign-up-background'>
        <div className='sign-up-container'>
        <FaUserCircle className='sign-up-icon'/>
        <h1 className='sign-up-sign-up-text'>Sign Up Now</h1>

        <input type='text' placeholder = 'Email' name='email' className='sign-in-input'/>
        <input type='text' placeholder = 'Password' name='password' className='sign-in-input'/>
        

        <button className='sign-up-button sign-up'>Sign Up</button>
        

        <span className='sign-up-account'>I do not have an account <Link to ='/signup' className='sign-up-sign-in'>Sign Up</Link></span>

    </div>
    </div>
    )
}

export default SignIn;