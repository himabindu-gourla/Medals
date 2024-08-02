import React, { createContext, useState, useEffect } from 'react';

const MedalsDataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
       
        fetch('/dummyData.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <MedalsDataContext.Provider value={data}>
            {children}
        </MedalsDataContext.Provider>
    );
};

export { MedalsDataContext, DataProvider };
