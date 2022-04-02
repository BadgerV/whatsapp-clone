import React from 'react';
import {Link} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import './sign-up.styles.css';
import backgroundImage from '../../Asset/wall.jpg.jpg'



const SignUp = () => (
    <div className='sign-up-background'>
        <div className='sign-up-container'>
        <FaUserCircle className='sign-up-icon'/>
        <h1 className='sign-up-sign-up-text'>Sign Up Now</h1>

        <input type='text' placeholder = 'Email' name='email' className='sign-in-input'/>
        <input type='text' placeholder = 'Password' name='password' className='sign-in-input'/>
        <input type='text' placeholder = 'Confirm Password' name='email' className='sign-in-input'/>

        <button className='sign-up-button sign-up'>Sign Up</button>
        <h2 className='sign-up-or-text'>OR</h2>
        <button className='sign-up-button twitter-button'>Login With Twitter</button>

        <span className='sign-up-account'>I do not have an account <Link to ='/signin' className='sign-up-sign-in'>Sign In</Link></span>

    </div>
    </div>
)

export default SignUp;