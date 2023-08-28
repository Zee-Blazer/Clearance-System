
// Components
import { StudentListComponent } from "./student-list.component";

export const Displayer = ({ display, value, handleClickOpen }) => {

    let renderComponent;

    switch(display){
        case "undergraduate":
            renderComponent = <>
                <StudentListComponent handleClickOpen={handleClickOpen} done={true} type={ value } />
                <StudentListComponent handleClickOpen={handleClickOpen} type={ value } />
                <StudentListComponent handleClickOpen={handleClickOpen} type={ value } />
                <StudentListComponent handleClickOpen={handleClickOpen} type={ value } />
            </> 
            break;
        case "postgraduate":
            renderComponent = <>
                <StudentListComponent handleClickOpen={handleClickOpen} type={ value } />
                <StudentListComponent handleClickOpen={handleClickOpen} type={ value } />
            </>
            break;
    }

    return renderComponent;
}
