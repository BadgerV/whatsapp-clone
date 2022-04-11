import { createContext, useEffect, useState } from "react";
import { auth, onAuthStateChangedListener, collectUserData } from "../utils/firebase";


//actual value to be acced
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    arrayOfUsers : null,
    arrayOfDisplayName : null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [arrayOfUsers, setArrayOfUsers] = useState(null);
    const [arrayOfDisplayName, setArrayDisplayName] = useState(null)
    const value = {currentUser, 
        setCurrentUser,
        arrayOfDisplayName,
        arrayOfUsers
    };

    useEffect(() => {
        let Data = []
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                setCurrentUser(user)
            }else {
                setCurrentUser(null)
            }
        });

        
        const getData =  collectUserData()
        .then(console.log)

        return unsubscribe;


    }, [])

    

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

