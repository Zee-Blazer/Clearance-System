import React, { useState } from 'react';

// Fill Details Styling
import '../Styling/fill-details.styles.css';

// Material UI icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import EmailIcon from '@mui/icons-material/Email';

// API call
import { addDetails } from '../Services/student.post';

export const FillDetailsScreen = () => {

    const [fullname, setFullname] = useState();
    const [matric, setMatric] = useState();
    const [phone, setPhone] = useState();
    const [type, setType] = useState();
    const [email, setEmail] = useState();

    const submitRec = () => {
        addDetails(matric, phone, email);
        setFullname(); 
        setEmail(); 
        setPhone(); 
        setMatric();
        alert("Done");
    }
    
    return (
        <div className="login__container">
            <div className="left__image"><div className="blck__bg"></div></div>
            
            <div className="right__cont">
                <h2>CLEARANCE FORM</h2>
                <p>Fill in your information to complete your clearance</p>

                <form>

                    <div className='input__cont'>
                        <AccountCircle className='input__icon' />
                        <input 
                            type='text' 
                            placeholder='Fullname' 
                            onChange={ e => setFullname(e.target.value) }
                            value={ fullname }
                        />
                    </div>

                    <div className='input__cont'>
                        <FormatItalicIcon className='input__icon' />
                        <input 
                            type='text' 
                            placeholder='Matric' 
                            required
                            onChange={ e => setMatric(e.target.value) }
                            value={ matric }
                        />
                    </div>

                    <div className='input__cont'>
                        <MilitaryTechIcon className='input__icon' />
                        <select name="Degree Type">
                            <option value="undergraduate">Undergraduate</option>
                            <option value="undergraduate">Postgraduate</option>
                        </select>
                    </div>

                    <div className='input__cont'>
                        <PhoneAndroidIcon className='input__icon' />
                        <input 
                            type='text' 
                            required
                            placeholder='Phone' 
                            onChange={ e => setPhone(e.target.value) }
                            value={ phone }
                        />
                    </div>

                    <div className='input__cont'>
                        <EmailIcon className='input__icon' />
                        <input 
                            type='email' 
                            required
                            placeholder='Email' 
                            onChange={ e => setEmail(e.target.value) }
                            value={ email }
                        />
                    </div>

                    <button 
                        className='login__btn fill__submit'
                        onClick={ (e) => {
                            e.preventDefault();
                            submitRec();
                        } }
                    >SUBMIT</button>

                </form>
            </div>

        </div>
    )
}
