import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {data} = useContext(UserContext);

	return (
        <div>
            Welcome {data}           
        </div>
    );
}

export default Profile;
