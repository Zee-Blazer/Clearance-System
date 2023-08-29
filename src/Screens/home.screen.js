import React, { useState, useEffect } from 'react';

// Home Screen CSS styling
import '../Styling/home.styles.css';

// Navigation items
import { redirect, useNavigate } from 'react-router-dom';

// Material TABS
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Component
import { StudentListComponent } from '../Components/student-list.component';
import { Displayer } from '../Components/displayer.component';

// Material UI component
import { AlertDialogSlide } from '../Components/alert.component';


export const HomeScreen = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState(0);
    const [screen, setScreen] = useState("undergraduate");
    const [openAlert, setOpenAlert] = useState(false);
    const [type, setType] = useState("alert");
    const [data, setData] = useState();

    // Alert display
    const [sendDetails, setSendDetails] = useState();

    const openType = (text) => setType(text);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const changeSection = (type) => setScreen(type)

    // Alert functions
    const handleClickOpen = () => {
        setOpenAlert(true);
      };
    
      const handleClose = () => {
        setOpenAlert(false);
      };

    useEffect( () => {
        if(!localStorage.getItem('admin')) navigate('/login');
    }, [] )

    return (
        <div className="login__container">

            {/* <div className='bg__display'></div> */}
            <AlertDialogSlide 
                handleClickOpen={ handleClickOpen } 
                handleClose={ handleClose } 
                open={ openAlert } 
                type={ type }
                data={ data }
                sendDetails={ sendDetails }
            />

            <div className="left__nav">
                <div 
                    className={ `nav__item ${ screen != "undergraduate" &&  "not__active"}` } 
                    onClick={ () => changeSection("undergraduate") }
                >Undergraduate</div>
                <div 
                    className={ `nav__item ${ screen != "postgraduate" &&  "not__active"}` } 
                    onClick={ () => changeSection("postgraduate") }
                    >Postgraduate</div>
            </div>

            <div className='right__act'>

                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Verify" />
                    <Tab label="Unverify" />
                </Tabs>

                <p className='alert__msg'>
                    Request to Data Favour’s SMS has been sent successfully
                </p>

                <div className='scrollable__cont'>
                    <Displayer 
                        display={ screen } 
                        value={ value } 
                        handleClickOpen={ handleClickOpen } 
                        openType={ openType }
                        setData={ setData }
                        setSendDetails={ setSendDetails }
                    />
                </div>

            </div>

        </div>
    )
}
