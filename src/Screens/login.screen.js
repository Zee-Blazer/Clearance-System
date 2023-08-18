
// Login CSS
import '../Styling/login.styles.css';

// Material UI icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { TextField } from '@mui/material';

export const LoginScreen = () => {

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
                        <input type='text' placeholder='Username' />
                    </div>

                    <div className='input__cont'>
                        <LockOpenIcon className='input__icon' />
                        <input type='password' placeholder='Password' />
                    </div>

                    <button className='login__btn'>LOGIN</button>

                </form>

            </div>
        </div>
    )
}
