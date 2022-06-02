import React from "react";

const HeroKonseling = () => {
	const hero = {
		minHeight: "50vh",
		background: `url(/assets/img/bg-konseling.png) center center / cover no-repeat`,
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
