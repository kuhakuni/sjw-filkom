import React from "react";
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo/Logo";
import Konseling from "./components/Konseling";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/konseling" element={<Konseling />} />
			</Routes>
			<Logo />
			<Footer />
		</HashRouter>
	);
}

export default App;
