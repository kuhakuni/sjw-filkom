import React, { useEffect } from "react";
import Fungsi from "./Fungsi/Fungsi";
import HeroKonseling from "./Hero/HeroKonseling";
import NavbarKonseling from "./Navbar/NavbarKonseling";
import Pendaftaran from "./Pendaftaran/Pendaftaran";
import Tentang from "./Tentang/Tentang";
import Struk from "./Struktur/Struktur";

const Konseling = () => {
	useEffect(() => {
		document.title = "SJW FILKOM | Konseling Sebaya FILKOM";
	});
	return (
		<>
			<NavbarKonseling />
			<HeroKonseling />
			<Tentang />
			<Fungsi />
			<Struk/>
			<Pendaftaran />
		</>
	);
};

export default Konseling;
