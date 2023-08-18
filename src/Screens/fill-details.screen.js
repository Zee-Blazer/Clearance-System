
// Fill Details Styling
import '../Styling/fill-details.styles.css';

// Material UI icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

export const FillDetailsScreen = () => {
    
    return (
        <div className="login__container">
            <div className="left__image"><div className="blck__bg"></div></div>
            
            <div className="right__cont">
                <h2>CLEARANCE FORM</h2>
                <p>Fill in your information to complete your clearance</p>

                <form>

                    <div className='input__cont'>
                        <AccountCircle className='input__icon' />
                        <input type='text' placeholder='Username' />
                    </div>

                    <div className='input__cont'>
                        <FormatItalicIcon className='input__icon' />
                        <input type='text' placeholder='Matric' />
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
                        <input type='text' placeholder='Phone' />
                    </div>

                    <button className='login__btn fill__submit'>SUBMIT</button>

                </form>
            </div>

        </div>
    )
}
