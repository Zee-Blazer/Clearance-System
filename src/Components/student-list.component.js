import React, { useState, useEffect } from 'react';

// API call
import { getUndergraduate, getPostgraduate } from '../Services/student.get';

// Material UI Icon
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const checkMsg = (data) => {
    let error = [];
    for(let i of data){
        if(i.cleared == "false") {
            error.push(i.section);
        }
    }

    return error
}

export const StudentListComponent = ({ 
    type, 
    handleClickOpen, 
    item, 
    openType, 
    setData, 
    setSendDetails 
}) => {


    return (
        <div className='person__detail'>
            <MilitaryTechIcon className='badge__icon' />
            <div 
                onClick={ () => {
                    openType("details");
                    handleClickOpen();
                    setData([item.fullname, item.requirements]);
                } }
            >
                <h4>{ item && item.fullname }</h4>
                <p style={{ color: !type ? "green" : "red" }}>{ !type ? "verified" : "unverified" }</p>
            </div>
            <button 
                className={ !type ? "buttonDo" : `buttonDo done__act` } 
                onClick={ () => {
                    openType("alert");
                    handleClickOpen();
                    if(type){
                        setSendDetails(["complete", checkMsg(item.requirements)]);
                    }
                    else if(!type){
                        setSendDetails(
                            [
                                "send", 
                                ["Send a message to student that the clearance is completed and he/she can proceed."]
                            ]
                        );
                    }
                } }
            >{ !type ? "Approve" : "Ask to complete" }</button>
        </div>
    )
}
