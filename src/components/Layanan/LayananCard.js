import React from "react";
const LayananCard = ({ title, content, button }) => {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center">
				<div className="grow leading-tight text-3xl p-8 font-semibold text-center text-white bg-primary">
					<h1>{title}</h1>
				</div>
				<div className="grow flex flex-col p-8 text-2xl text-center text-white bg-tertiary">
					<p className="font-normal">{content}</p>
					{button && (
						<button className="grow mt-8 py-2 font-semibold bg-opacity-20 bg-white border-2 rounded shadow-layanan">
							{button}
						</button>
					)}
				</div>
			</div>
		</>
	);
};
export default LayananCard;
