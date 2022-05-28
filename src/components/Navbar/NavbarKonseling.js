import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavLink from "./NavLink";
import "./Navbar.css";

const NavbarKonseling = () => {
	const location = useLocation().hash;
	const toggleHamburger = (el) => {
		const navMenu = document.querySelector("#nav-menu");
		navMenu.classList.toggle("navbar-mobile");
		el.classList.toggle("bi-list");
		el.classList.toggle("bi-x");
	};
	const headerScrolled = () => {
		const header = document.querySelector("#header");
		if (window.scrollY > 20) {
			header.classList.add("header-scrolled");
		} else {
			header.classList.remove("header-scrolled");
		}
	};
	window.addEventListener("scroll", headerScrolled);

	return (
		<div className="header sticky top-0 left-0 w-full py-5" id="header">
			<div className="container flex justify-between items-center">
				<Link
					smooth
					to="../"
					className="text-2xl text-primary font-bold"
				>
					SJW FILKOM
				</Link>
				<nav className="navbar" id="nav-menu">
					<i
						className="bi bi-list mobile-nav-toggle text-4xl text-primary cursor-pointer"
						onClick={(e) => toggleHamburger(e.target)}
					></i>
					<ul>
						<NavLink
							to="konseling/#tentang"
							className={`${
								location === "#tentang" ? "active" : ""
							} text-primary font-semibold`}
						>
							Tentang
						</NavLink>
						<NavLink
							to="konseling/#fungsi"
							className={`${
								location === "#fungsi" ? "active" : ""
							} text-primary font-semibold`}
						>
							Fungsi
						</NavLink>
						<NavLink
							to="konseling/#struktur"
							className={`${
								location === "#struktur" ? "active" : ""
							} text-primary font-semibold`}
						>
							Struktur
						</NavLink>
						<NavLink
							to="konseling/#pendaftaran"
							className={`${
								location === "#pendaftaran" ? "active" : ""
							} text-primary font-semibold`}
						>
							Pendaftaran
						</NavLink>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default NavbarKonseling;
