import React from "react";
import post from "../../assets/img/post-sjw.jpg";

const ArtikelCard = () => {
	return (
		<a className="flex" href=" ">
			<div>
				<img src={post} alt="" className="max-w-xs" />
				<div className="bg-primary p-5 text-center font-semibold">
					<h2 className="text-secondary text-lg mb-2">
						2 April 2022
					</h2>
					<h1 className="text-white text-2xl">SJW FILKOM</h1>
				</div>
			</div>
		</a>
	);
};

export default ArtikelCard;
