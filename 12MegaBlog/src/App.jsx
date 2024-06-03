import { useState, useEffect } from "react";
import "./App.css";
import { Header, Footer } from "./components/index.js";
import AuthService from "./appwrite/auth.service.js";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authenticationSlice.js";
import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		AuthService.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login({userData}));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return !loading ? (
		<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
			<div className="w-full block">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	) : null;
}

export default App;
