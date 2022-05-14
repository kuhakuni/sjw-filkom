import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import "./Navbar.css";

const Navbar = () => {
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
				<Link to="./" className="text-2xl text-primary font-bold">
					SJW FILKOM
				</Link>
				<nav className="navbar" id="nav-menu">
					<i
						className="bi bi-list mobile-nav-toggle text-4xl text-primary cursor-pointer"
						onClick={(e) => toggleHamburger(e.target)}
					></i>
					<ul>
						<NavLink to="#">Beranda</NavLink>
						<NavLink to="#artikel">Artikel</NavLink>
						<NavLink to="#layanan">Layanan</NavLink>
						<NavLink to="#faq">FaQ</NavLink>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
