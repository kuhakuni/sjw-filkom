import React from "react";
import ArtikelCard from "./ArtikelCard";
import { Link } from "react-router-dom";

const Artikel = () => {
	return (
		<>
			<div className="bg-secondary" id="artikel">
				<div className="container py-16 flex flex-row  flex-wrap justify-around">
					<ArtikelCard />
					<ArtikelCard />
					<ArtikelCard />
					<div className="bg-tertiary flex flex-col my-24 md:w-44">
						<div className="">
							<p className="text-left mx-auto text-3xl font-bold text-white w-3/4 my-24">
								Lihat Kabar Lainnya!
							</p>
						</div>

						<Link to="/">
							<div className="text-8xl text-customYellow mx-10">
								<ion-icon name="arrow-forward-circle-outline"></ion-icon>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default Artikel;
