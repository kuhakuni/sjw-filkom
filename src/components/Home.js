import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Layanan from "./Layanan/Layanan";
import Artikel from "./Artikel/Artikel";
import Important from "./Important/Important";
import Footer from "./Footer/Footer";
import Alur from "./Alur/Alur";
import Logo from "./Logo/Logo";
import Accordion from "./Faq/Accordion";


const Home = () => {
	useEffect(() => {
		document.title = "SJW FILKOM | Saling Jaga Warga FILKOM";
	});
	return (
		<>
			<Hero />
			<Artikel />
			<Layanan />
			<Important />
			<Alur />
			<Accordion />
			<Logo />
			<Footer />
		</>
	);
};

export default Home;
