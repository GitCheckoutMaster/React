import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet /> {/* outlet will be replaced by children components in main.jsx file */}
			<Footer />
		</>
	);
}

export default Layout;
