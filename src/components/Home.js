import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Layanan from "./Layanan/Layanan";
import Artikel from "./Artikel/Artikel";
import Important from "./Important/Important";
import Alur from "./Alur/Alur";
import Logo from "./Logo/Logo";
import Accordion from "./Faq/Accordion";

async function getArtikel() {
	const data = await fetch(
		"https://api-instagram-bem-filkom-2022.herokuapp.com/sjw",
		{
			mode: "cors",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((res) => res.json())
		.then((data) => data);
	return data;
}

const Home = () => {
	const [artikel, setArtikel] = React.useState([]);
	useEffect(() => {
		getArtikel().then((data) => setArtikel(data));
		document.title = "SJW FILKOM | Saling Jaga Warga FILKOM";
	});

	console.log(artikel);
	return (
		<>
			<Hero />
			<Artikel />
			<Layanan />
			<Important />
			<Alur />
			<Accordion />
			<Logo />
		</>
	);
};

export default Home;
