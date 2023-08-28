
// Material UI Icon
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const StudentListComponent = ({ done, type, handleClickOpen }) => (
    <div className='person__detail'>
        <MilitaryTechIcon className='badge__icon' />
        <div>
            <h4>Dada Favour</h4>
            <p style={{ color: !type ? "green" : "red" }}>{ !type ? "Verified" : "Unverified" }</p>
        </div>
        <button 
            className="done__act" 
            onClick={ handleClickOpen }
        >{ done==true ? "Done" : "Approve" }</button>
    </div>
)
