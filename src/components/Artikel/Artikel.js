import React from "react";
import ArtikelCard from "./ArtikelCard";

const Artikel = () => {
	return (
		<>
			<div className="bg-secondary">
				<div className="container py-16 grid sm:grid-cols-2 place-items-center lg:flex lg:justify-between gap-4 items-stretch">
					<ArtikelCard />
					<ArtikelCard />
					<ArtikelCard />
					<div className="bg-tertiary text-white w-full flex flex-col justify-center items-center">
						<div className="p-10 text-center lg:text-left">
							<p className="font-semibold text-3xl">
								Lihat Artikel lainnya
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Artikel;
