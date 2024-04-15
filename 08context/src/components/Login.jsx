import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext"

function Login() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
    const {setData} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(username);
    }

    return (
		<div>
			<h2>Login</h2>
			<input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username" />{"\t\t\t"}
			<input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" /> <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
