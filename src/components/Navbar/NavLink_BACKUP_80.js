import React from "react";
<<<<<<< HEAD
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
=======
import { HashLink as Link} from "react-router-hash-link";

const NavLink = ({ children, ...props }) => {
>>>>>>> 7c69f17eeb7d55d20e08f34289712ba2d5f9e509
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
