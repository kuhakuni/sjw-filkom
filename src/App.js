import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
}

export default App;
