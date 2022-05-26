import React from "react";
const LayananCard = ({ title, content, button, link }) => {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center">
				<div className="grow p-8 text-center text-white bg-primary">
					<h2 className="font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
						{title}
					</h2>
				</div>
				<div className="grow flex flex-col p-8 text-base md:text-lg lg:text-xl text-center text-white bg-tertiary">
					<p>{content}</p>
					{button && (
						<a
							href={link}
							className="cursor-pointer grow mt-8 py-2 font-semibold bg-opacity-20 bg-white border-2 rounded shadow-layanan"
						>
							{button}
						</a>
					)}
				</div>
			</div>
		</>
	);
};
export default LayananCard;
