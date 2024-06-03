import React from "react";
import { logout as storeLogout } from "../../store/authenticationSlice.js";
import { useDispatch, useSelector } from "react-redux";
import AuthenticationService from "../../appwrite/auth.service.js";

function LogoutBtn() {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		AuthenticationService.logout().then(() => {
			dispatch(storeLogout());
		});
	};

	return (
		<button
			className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
			onClick={logoutHandler}
		>
			Logout
		</button>
	);
}

export default LogoutBtn;
