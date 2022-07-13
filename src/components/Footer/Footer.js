import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-col bg-primary text-white">
				<div className="flex flex-row justify-center py-24">
					<a
						href="https://www.tiktok.com/@bemfilkomub"
						target="_blank"
						rel=" noreferrer"
						className=""
					>
						<img
							src="/assets/img/tiktok.svg"
							alt="missing tiktok img"
							className="md:pr-12 pr-4 pl-4 "
						></img>
					</a>

					<a
						href="line://ti/p/@csj9184g"
						target="_blank"
						rel=" noreferrer"
					>
						<img
							src="/assets/img/line.svg"
							alt="missing line img"
							className="md:pr-12 pr-4"
						></img>
					</a>

					<a
						href="https://www.instagram.com/bemfilkomub"
						target="_blank"
						rel=" noreferrer"
					>
						<img
							src="/assets/img/ig.svg"
							alt="missing ig img"
							className="md:pr-12 pr-4"
						></img>
					</a>

					<a
						href="https://twitter.com/bemfilkomub"
						target="_blank"
						rel=" noreferrer"
					>
						<img
							src="/assets/img/twitter.svg"
							alt="missing twitter img"
							className="md:pr-12 pr-4"
						></img>
					</a>

					<a
						href="https://www.youtube.com/c/BEMFILKOMUB"
						target="_blank"
						rel=" noreferrer"
					>
						<img
							src="/assets/img/youtube.svg"
							alt="missing youtube img"
							className="md:pr-12 pr-4"
						></img>
					</a>
				</div>

				<div className="flex flex-col mx-auto text-center">
					<h3 className="text-secondary text-3xl font-semibold mb-6">
						Sekretariat
					</h3>

					<div className="text-sm md:text-base">
						<p>
							Gedung C1.2 Fakultas Ilmu Komputer Universitas
							Brawijaya
						</p>
						<p>
							Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur
							65145
						</p>
						<p>Email : bemfilkom2022@gmail.com</p>
					</div>

					<h3 className="text-secondary text-3xl font-semibold mb-6 pt-28">
						Tautan Terkait
					</h3>
					<a
						href="https://filkom.ub.ac.id/"
						target="_blank"
						rel="noreferrer"
					>
						FILKOM UB
					</a>
					<a
						href="https://bemfilkom.ub.ac.id/"
						target="_blank"
						rel="noreferrer"
					>
						Aryakarsa 2022
					</a>
					<a
						href="https://bemfilkom.ub.ac.id/2021/"
						target="_blank"
						rel="noreferrer"
					>
						Mozaik Asa 2021
					</a>
					<a
						href="https://bemfilkom.ub.ac.id/2020/"
						target="_blank"
						rel="noreferrer"
					>
						Elaborasi Makna 2020
					</a>
					<a
						href="https://bemfilkom.ub.ac.id/2019/"
						target="_blank"
						rel="noreferrer"
					>
						Atmabara 2019
					</a>
					<a
						href="https://bemfilkom.ub.ac.id/2018/"
						target="_blank"
						rel="noreferrer"
						className="pb-10"
					>
						Adhikarya 2018
					</a>
				</div>
				<hr className="border-solid rounded border-white mx-12" />

				<p className="font-semibold text-center pt-20 pb-16 md:text-base text-xs">
					©2022, Biro Pengembangan Informasi & Teknologi BEM FILKOM UB
					2022
				</p>
			</footer>
		</>
	);
};

export default Footer;
