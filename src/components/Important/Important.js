import React from "react";
import cloudLeft from "../../assets/img/leftcloudred.svg";
import cloudRight from "../../assets/img/rightcloudyellow.svg";
const Important = () => {
	return (
		<div className="bg-primary">
			<div className="container py-16 flex flex-row gap-12 content-center justify-between ">
				<div className="hidden md:block self-center w-full">
					<img className="lg:w-3/4 mx-auto" src={cloudLeft} alt="" />
				</div>
				<div className="flex flex-col items-center justify-center text-center text-white">
					<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
						Kenapa harus SJW FILKOM?
					</h1>
					<p className="font-semibold text-base md:text-lg lg:text-xl">
						Semua data yang kamu berikan kepada SJW FILKOM akan
						dijamin keamanannya dan langsung dianalisis oleh
						kemahasiswaan. Tenaga ahli yang berperan dalam SJW
						FILKOM sudah terkualifikasi kemampuannya untuk
						memberikan pelayanan terbaik.
					</p>
				</div>
				<div className="hidden md:block self-center w-full">
					<img className="lg:w-3/4 mx-auto" src={cloudRight} alt="" />
				</div>
			</div>
		</div>
	);
};
export default Important;
