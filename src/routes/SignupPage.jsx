import React from 'react';
import { Link } from 'react-router-dom';
import SignupStyle from '../SignupPage.css';

function SignupPage() {
    return (
        <div className='Background'>
            <h1> Create a devlink account </h1>

            <h3> Name * </h3>
            <input
                type='text'
                id='name'
                placeholder='Enter your name'
            />

            <h3> Email * </h3>
            <input
                type='text'
                id='email'
                placeholder='Enter your email'
            />

            <h3> Password * </h3>
            <input
                type='text'
                id='password'
                placeholder='Enter new password'
            />
            
            <h3> Confirm Password * </h3>
            <input
                type='text'
                id='passwordConfirm'
                placeholder='Confirm your password'
            />

            <div className='link'>
            <Link to="/login"> Register </Link>
            </div>
        </div>
      );
}

export default SignupPage;