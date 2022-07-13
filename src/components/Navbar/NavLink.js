import React from "react";
import { HashLink as NavHash } from "react-router-hash-link";
const NavLink = ({ children, to, className }) => {
	const scrollToElement = (element) => {
		const elementOffset = element.offsetTop;
		const offset = elementOffset - 60;
		window.scrollTo({
			top: offset,
			behavior: "smooth",
		});
	};
	return (
		<NavHash
			smooth
			to={`/${to}`}
			scroll={(el) => scrollToElement(el)}
			className={className + " hover:text-tertiary md:px-8"}
			tabIndex="-1"
		>
			{children}
		</NavHash>
	);
};

export default NavLink;
