import React, { useState } from 'react';

// Home Screen CSS styling
import '../Styling/home.styles.css';

// Material TABS
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Component
import { StudentListComponent } from '../Components/student-list.component';


export const HomeScreen = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="login__container">

            <div className="left__nav">
                <div className='nav__item'>Undergraduate</div>
                <div className='nav__item not__active'>Postgraduate</div>
            </div>

            <div className='right__act'>

                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Verify" />
                    <Tab label="Unverify" />
                </Tabs>

                <p className='alert__msg'>
                    Request to Data Favour’s SMS has been sent successfully
                </p>

                <StudentListComponent done={true} />
                <StudentListComponent />
                <StudentListComponent />
                <StudentListComponent />

            </div>

        </div>
    )
}
