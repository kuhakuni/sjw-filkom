import React from "react";
import { HashLink as Link} from "react-router-hash-link";

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
