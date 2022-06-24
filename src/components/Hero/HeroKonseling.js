import React from "react";

const HeroKonseling = () => {
	const URL =
		"https://res.cloudinary.com/kuhakuni/image/upload/v1656081621/sayvge8upssrq0brxbfi.png";
	const hero = {
		minHeight: "50vh",
		background: `url(${URL}) center center / cover no-repeat`,
	};
	return (
		<>
			<div className="flex justify-center items-center" style={hero}>
				<div className="container text-center ">
					<h1 className="text-4xl font-bold text-white mb-11">
						KONSELING SEBAYA FILKOM
					</h1>
					<hr className="bg-secondary border-none h-1" />
				</div>
			</div>
		</>
	);
};

export default HeroKonseling;
