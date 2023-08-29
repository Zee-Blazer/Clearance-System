import React, { useState, createContext, useEffect } from 'react';

// Backend get Student data
import { getUndergraduate, getPostgraduate } from './student.get';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [underVerifiedData, setUnderVerifiedData] = useState();
    const [underUnverifiedData, setUnderUnverifiedData] = useState();
    const [postVerifiedData, setPostVerifiedData] = useState();
    const [postUnverifiedData, setPostUnverifiedData] = useState();

    useEffect( () => {
        getUndergraduate("verified", setUnderVerifiedData);
        getUndergraduate("unverified", setUnderUnverifiedData);
        getPostgraduate("verified", setPostVerifiedData);
        getPostgraduate("unverified", setPostUnverifiedData);
    }, [] )

    return (
        <DataContext.Provider
            value={{
                underVerifiedData,
                underUnverifiedData,
                postVerifiedData,
                postUnverifiedData
            }}
        >
            { children }
        </DataContext.Provider>
    )
}
