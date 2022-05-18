import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ children, ...props }) => {
	return (
		<li>
			<Link className="text-primary font-semibold" {...props}>
				{children}
			</Link>
		</li>
	);
};

export default NavLink;
