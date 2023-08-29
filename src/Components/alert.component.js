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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AlertDialogSlide({ sendDetails, handleClose, open, type, data }) {

    let renderComponent;

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
                                sendDetails.map( item => (
                                    <span style={{ color: 'red' }}>{ item }, </span>
                                ) )
                            }"
                            </> 
                        }
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Send</Button>
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
                                <DialogContentText style={{ display: 'flex', marginTop: 7 }}>
                                    { 
                                        item.cleared === "true" ? 
                                            <CheckCircleIcon color="success" /> :
                                            <CancelIcon style={{ color: "red" }} /> 
                                    }
                                    <p style={{ marginLeft: "6px" }}>{ (item.section) }</p>
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
