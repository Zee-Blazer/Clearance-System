import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// Material UI icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

// API work
import { sendEmail, sendPhone } from '../Services/student.post';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const arrangeMsg = (data) => {
    // alert(data);
    return data.join(", ")
}

export function AlertDialogSlide({ sendDetails, handleClose, open, type, data }) {

    let renderComponent;

    const sendEmailAndPhone = (subject, text, msg) => {
        sendEmail(subject, text);
        sendPhone(msg);
    }

    switch(type){
        case "alert":
            renderComponent = <>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>Do you want to send?</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        { sendDetails && <>
                            Message that would be sent to the student "{
                                sendDetails[1].map( item => (
                                    <span style={{ color: 'red' }}>{ item }, </span>
                                ) )
                            }"
                            </> 
                        }
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={ () => {
                        if(sendDetails[0] == "send"){
                            const subject = "Congratulations!!!";
                            const text = `You have completed your clearance
You can now go to the register to get your Certificate`;

                            const toPhone = subject + "\n" + text;
                            sendEmailAndPhone(subject, text, toPhone)
                        }
                        else {
                            const subject = "Clearance Almost completed"
                            const text = `You have to complete ${arrangeMsg(sendDetails[1])} before you can be cleared`;

                            const toPhone = subject + "\n" + text;
                            sendEmailAndPhone(subject, text, toPhone);
                        }
                        handleClose()
                    } }>Send</Button>
                    </DialogActions>
                </Dialog>
            </>
            break;
        case "details":
            renderComponent = <>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        Clearance Details (
                        <span style={{ color: "green" }}>{ data && data[0] }</span>)
                    </DialogTitle>
                    <DialogContent>
                        { data && data[1].map( (item ) => {
                            console.log(item)

                            return (
                                <DialogContentText style={{ display: 'flex', marginTop: 12 }}>
                                    { 
                                        item.cleared === "true" ? 
                                            <CheckCircleIcon color="success" /> :
                                            <CancelIcon style={{ color: "red" }} /> 
                                    }
                                    <p style={{ marginLeft: "6px" }}>{ (item.section).toUpperCase() }</p>
                                </DialogContentText>
                            )
                        } ) }
                    </DialogContent>
                </Dialog>
            </>
            break;
    }

  return (
    <div>
      { renderComponent }
    </div>
  );
}
