import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavLink from "./NavLink";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation().hash;
	const toggleHamburger = (el) => {
		el.classList.toggle("bi-list");
		el.classList.toggle("bi-x");
		setOpen(!open);
	};
	const headerScrolled = () => {
		const header = document.querySelector("#header");
		if (window.scrollY > 100) {
			header.classList.add("shadow-md");
		} else {
			header.classList.remove("shadow-md");
		}
	};
	window.addEventListener("scroll", headerScrolled);

	return (
		<div
			className="header sticky top-0 left-0 w-full py-5 z-[100] bg-white transition-all"
			id="header"
		>
			<div className="container">
				<div className="flex justify-between items-center">
					<Link
						smooth
						to="#"
						className="text-2xl text-primary font-bold"
					>
						SJW FILKOM
					</Link>
					<nav className="p-0" id="nav-menu">
						<i
							className={`bi bi-list text-4xl text-primary cursor-pointer md:hidden block`}
							onClick={(e) => toggleHamburger(e.target)}
						></i>
						<ul className="hidden md:flex flex-col md:flex-row justify-between">
							<li>
								<NavLink
									to="#"
									className={`${
										location === ""
											? "text-tertiary"
											: "text-primary"
									}  font-semibold`}
								>
									Beranda
								</NavLink>
							</li>
							<li>
								<NavLink
									to="#artikel"
									className={`${
										location === "#artikel"
											? "text-tertiary"
											: "text-primary"
									}  font-semibold`}
								>
									Artikel
								</NavLink>
							</li>
							<li>
								<NavLink
									to="#layanan"
									className={`${
										location === "#layanan"
											? "text-tertiary"
											: "text-primary"
									} font-semibold`}
								>
									Layanan
								</NavLink>
							</li>
							<li>
								<NavLink
									to="#faq"
									className={`${
										location === "#faq"
											? "text-tertiary"
											: "text-primary"
									} font-semibold`}
								>
									FaQ
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>

				{open && (
					<div className="flex flex-col mt-3 px-2 gap-y-3 md:hidden text-lg">
						<NavLink
							to="#"
							className={`${
								location === ""
									? "text-tertiary"
									: "text-primary"
							}  font-semibold`}
						>
							Beranda
						</NavLink>
						<NavLink
							to="#artikel"
							className={`${
								location === "#artikel"
									? "text-tertiary"
									: "text-primary"
							}  font-semibold`}
						>
							Artikel
						</NavLink>
						<NavLink
							to="#layanan"
							className={`${
								location === "#layanan"
									? "text-tertiary"
									: "text-primary"
							} font-semibold`}
						>
							Layanan
						</NavLink>
						<NavLink
							to="#faq"
							className={`${
								location === "#faq"
									? "text-tertiary"
									: "text-primary"
							} font-semibold`}
						>
							FaQ
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
