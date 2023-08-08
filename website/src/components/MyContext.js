import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({children}) {
    const [navi, setNavi] = useState([
        { name: 'Profile', href: '#', current: true },
        { name: 'Projects', href: 's', current: false },
        { name: 'Proficiencies', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
    ]);


    const updateNavi = (val) => {
        setNavi(val);
    };

    const contextValue = {
        navi,
        updateNavi,
    };



    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );

}

export function useMyContext() {
    return useContext(MyContext);
}
