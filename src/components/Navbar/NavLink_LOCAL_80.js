import React from "react";
import { HashLink as NavHash } from "react-router-hash-link";
// import { NavLink } from "react-router-dom";
const NavLink = ({ children, to }) => {
	const scrollToElement = (element) => {
		const elementOffset = element.offsetTop;
		const offset = elementOffset - 50;
		window.scrollTo({
			top: offset,
			behavior: "smooth",
		});
	};
	return (
		<li>
			<NavHash
				smooth
				to={`/${to}`}
				scroll={(el) => scrollToElement(el)}
				// className={(isActive) => {
				// 	return `${
				// 		isActive ? "active" : ""
				// 	} text-primary font-semibold`;
				// }}
				// activeClassName="active"
				className={`text-primary font-semibold`}
				tabIndex="-1"
			>
				{children}
			</NavHash>
		</li>
	);
};

export default NavLink;
