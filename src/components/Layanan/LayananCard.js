import React from "react";
import { Link } from "react-router-dom";
const LayananCard = ({ title, content, button, link }) => {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center ">
				<div className="grow py-4 text-center text-white bg-primary">
					<h2 className="font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
						{title}
					</h2>
				</div>
				<div className="grow flex flex-col px-24 text-base md:text-lg lg:text-xl text-center text-white bg-tertiary py-10">
					<p>{content}</p>
					{button && (
						<Link
							to={link}
							className="grow mt-8 py-2 font-semibold bg-opacity-20 bg-white border-2 shadow-layanan"
						>
							{button}
						</Link>
					)}
				</div>
			</div>
		</>
	);
};
export default LayananCard;
