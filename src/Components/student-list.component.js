
// Material UI Icon
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const StudentListComponent = (done) => (
    <div className='person__detail'>
        <MilitaryTechIcon className='badge__icon' />
        <div>
            <h4>Dada Favour</h4>
            <p>Verified</p>
        </div>
        <button className="done__act" >{ done==true ? "Done" : "Approve" }</button>
    </div>
)
