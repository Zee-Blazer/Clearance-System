import React, { useState } from 'react';

// Login CSS
import '../Styling/login.styles.css';

// Service API's
import { login } from '../Services/admin';

// Navigation
import { useNavigate } from 'react-router-dom';

// Material UI icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { TextField } from '@mui/material';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState();
    const [pwd, setPwd] = useState();

    const adminPass = (e) => {
        e.preventDefault();
        login(admin, pwd, navigate);
    }

    return (
        <div className='login__container'>
            <div className='login__box'>
                
                <div className='center__title'>
                    <AccountCircleIcon className='account__icon' fontSize='158px' />
                    <h4>ADMIN LOGIN</h4>
                </div>

                <form>
                    
                    <div className='input__cont'>
                        <AccountCircle className='input__icon' />
                        <input 
                            type='text' 
                            placeholder='Username' 
                            value={ admin }
                            onChange={ e => setAdmin(e.target.value) }
                        />
                    </div>

                    <div className='input__cont'>
                        <LockOpenIcon className='input__icon' />
                        <input 
                            type='password' 
                            placeholder='Password' 
                            value={ pwd }
                            onChange={ e => setPwd(e.target.value) }
                        />
                    </div>

                    <button 
                        className='login__btn'
                        onClick={ adminPass }
                    >LOGIN</button>

                </form>

            </div>
        </div>
    )
}
