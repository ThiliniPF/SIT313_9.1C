import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';

function App() 
{
  return (
    <div>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
    </Routes>
    </div>
  );
}

export default App