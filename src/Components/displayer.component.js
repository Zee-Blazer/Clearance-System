import React, { useContext, useState } from 'react';

// Services request
import { getUndergraduate } from '../Services/student.get';

// Context Provider
import { DataContext } from '../Services/data.context';

// Components
import { StudentListComponent } from "./student-list.component";

export const Displayer = ({ 
    display, 
    value, 
    handleClickOpen, 
    openType, 
    setData, 
    setSendDetails 
}) => {

    // Contexts
    const { 
        underVerifiedData, 
        underUnverifiedData, 
        postVerifiedData,
        postUnverifiedData
    } = useContext(DataContext);

    let renderComponent;

    switch(display){
        case "undergraduate":
            if(!value){
                renderComponent = <>
                    { underVerifiedData && underVerifiedData.map( (item) => (
                        <StudentListComponent 
                        handleClickOpen={handleClickOpen} 
                        openType={ openType }
                        setData={ setData }
                        type={ value } 
                        item={ item } 
                        setSendDetails={ setSendDetails }
                    />
                    ) ) }
                </>
            }
            else{
                renderComponent = <>
                    { underUnverifiedData && underUnverifiedData.map( (item) => (
                        <StudentListComponent 
                        handleClickOpen={handleClickOpen} 
                        openType={ openType }
                        setData={ setData }
                        type={ value } 
                        item={ item } 
                        setSendDetails={ setSendDetails }
                    />
                    ) ) }
                </>
            }
            break;
        case "postgraduate":
            if(!value){
                renderComponent = <>
                    { postVerifiedData && postVerifiedData.map( (item) => (
                        <StudentListComponent 
                        handleClickOpen={handleClickOpen} 
                        openType={ openType }
                        setData={ setData }
                        type={ value } 
                        item={ item } 
                        setSendDetails={ setSendDetails }
                    />
                    ) ) }
                </>
            }
            else{
                renderComponent = <>
                    { postUnverifiedData && postUnverifiedData.map( (item) => (
                        <StudentListComponent 
                        handleClickOpen={handleClickOpen} 
                        openType={ openType }
                        setData={ setData }
                        type={ value } 
                        item={ item } 
                        setSendDetails={ setSendDetails }
                    />
                    ) ) }
                </>
            }
            break;
    }

    return renderComponent;
}
