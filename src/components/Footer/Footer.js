import React from 'react'
import { Link } from 'react-router-dom'
import ig from "../../assets/img/ig.svg";
import line from "../../assets/img/line.svg";
import telegram from "../../assets/img/telegram.svg";
import tiktok from "../../assets/img/tiktok.svg";
import youtube from "../../assets/img/youtube.svg";
import twitter from "../../assets/img/twitter.svg";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-col bg-primary text-white">
				<div className="flex flex-row justify-center py-24">
					<Link to="https://www.tiktok.com/@bemfilkomub">
						<img
							src={tiktok}
							alt="missing tiktok img"
							className="md:pr-12 pr-4 pl-4"
						></img>
					</Link>

					<Link to="/">
						<img
							src={line}
							alt="missing line img"
							className="md:pr-12 pr-4"
						></img>
					</Link>

					<Link to="https://www.instagram.com/bemfilkomub/">
						<img
							src={ig}
							alt="missing ig img"
							className="md:pr-12 pr-4"
						></img>
					</Link>

					<Link to="https://www.instagram.com/">
						<img
							src={telegram}
							alt="missing telegram img"
							className="md:pr-12 pr-4"
						></img>
					</Link>

					<Link to="https://twitter.com/bemfilkomub?lang=en">
						<img
							src={twitter}
							alt="missing twitter img"
							className="md:pr-12 pr-4"
						></img>
					</Link>

					<Link to="https://www.youtube.com/c/BEMFILKOMUB">
						<img
							src={youtube}
							alt="missing youtube img"
							className="md:pr-12 pr-4"
						></img>
					</Link>
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
					<Link to="/">FILKOM UB</Link>
					<Link to="/">Aryakarsa 2022</Link>
					<Link to="/">Mozaik Asa 2021</Link>
					<Link to="/">Elaborasi Makna 2020</Link>
					<Link to="/">Atmabara 2019</Link>
					<Link to="/" className="pb-10">
						Adhikarya 2018
					</Link>
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
