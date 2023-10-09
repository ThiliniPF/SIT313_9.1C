import React from 'react';
import { Link } from 'react-router-dom';
import LoginStyle from '../LoginPage.css';

function LoginPage() {
  return (
    <div className='background'>
      <h1> Login Page </h1>
      <h3> Username </h3>
      <input
        type='text'
        id='username'
        placeholder='Enter username'
      />

      <h3> Password </h3>
      <input
        type='text'
        id='password'
        placeholder='Enter password'
      />

        <div className='link'>
        <Link to="/signup"> Sign Up </Link>
      </div>

      <div className='link'>
      <Link to="/"> Log In </Link>
      </div>
    </div>
  );
}

export default LoginPage;
