import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo/Logo";
import Konseling from "./components/Konseling";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	return (
		<HashRouter>
			<ScrollToTop />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/konseling" element={<Konseling />} />
			</Routes>
			<Logo />
			<Footer />
			{/* </ScrollToTop> */}
		</HashRouter>
	);
}

export default App;
