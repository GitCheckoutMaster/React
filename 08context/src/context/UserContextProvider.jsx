import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [data, setData] = useState("Jay");

    return (
        <UserContext.Provider value={{data, setData}}> 
            {children}
        </UserContext.Provider>
    )
}
/* this children will be replaced by anything inside UserContextProvider */
export default UserContextProvider;
