import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Layanan from "./Layanan/Layanan";
import Artikel from "./Artikel/Artikel";
import Important from "./Important/Important";
const Home = () => {
	useEffect(() => {
		document.title = "SJW FILKOM | Saling Jaga Warga FILKOM";
	});
	return (
		<>
			<Navbar />
			<Hero />
			<Artikel />
			<Layanan />
			<Important />
		</>
	);
};

export default Home;
