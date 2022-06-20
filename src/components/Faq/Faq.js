import { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { Fragment } from "react";
export default function Example() {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<Fragment>
			<div className="bg-secondary pb-3 h-[600px] lg:h-[600px]" id="faq">
				<div>
					<h1 className="text-center text-primary font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl pt-10 pb-3 md:pb-8">
						Frequently Asked Questions
					</h1>
				</div>
				<div className="max-w-lg md:max-w-7xl container">
					<Accordion
						open={open === 1}
						onClick={() => handleOpen(1)}
						className={`${
							open === 1
								? "text-white bg-primary"
								: "text-primary bg-white"
						} cursor-pointer md:mb-5 rounded-lg mb-3`}
					>
						<div
							className={` flex flex-row justify-between text-primary text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-5 items-center align-middle`}
						>
							<div
								className={`${
									open === 1 ? "text-white" : "text-primary"
								} text-5xl`}
							>
								<ion-icon
									name="help-circle-outline"
									className=""
								></ion-icon>
							</div>

							<h1
								className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ${
									open === 1 ? "text-white" : "text-primary"
								}`}
							>
								Apa perbedaan ULTKSP dan Konseling?
							</h1>

							<div
								className={`${
									open === 1
										? "text-white -rotate-90"
										: "text-primary"
								} text-3xl content-center ease-in-out duration-100`}
							>
								<ion-icon
									name="caret-forward-outline"
									className="items-center"
								></ion-icon>
							</div>
						</div>

						<AccordionBody
							className={
								"text-center font-semibold text-base lg:text-lg p-5 bg-primary text-white rounded-lg h-[110px] ease-in-out duration-100"
							}
							style={{
								color: "white",
								fontFamily: "Poppins",
							}}
						>
							Perbedaan ULTKSP dan Konseling ada pada konteks
							permasalahannya. ULTKSP berfokus pada layanan
							pelaporan dan konseling kekerasan seksual dan
							perundungan. Sedangkan, layanan Konseling meliputi
							masalah pribadi, sosial, bimbingan belajar,
							bimbingan karir, dan sebagainya.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 2}
						onClick={() => handleOpen(2)}
						className={`${
							open === 2
								? "text-white bg-primary"
								: "text-primary bg-white"
						} cursor-pointer md:mb-5 rounded-lg mb-3`}
					>
						<div className="content-center ">
							<div
								className={`flex flex-row justify-between text-primary text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-5 items-center align-middle`}
							>
								<div
									className={`${
										open === 2
											? "text-white"
											: "text-primary"
									} text-5xl`}
								>
									<ion-icon
										name="help-circle-outline"
										className=""
									></ion-icon>
								</div>

								<h1
									className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ${
										open === 2
											? "text-white"
											: "text-primary"
									}`}
								>
									Mengapa harus menggunakan email UB saat
									mendaftar ULTKSP atau Konseling?
								</h1>

								<div
									className={`${
										open === 2
											? "text-white -rotate-90"
											: "text-primary"
									} text-3xl content-center ease-in-out duration-100`}
								>
									<ion-icon
										name="caret-forward-outline"
										className="items-center"
									></ion-icon>
								</div>
							</div>
						</div>
						<AccordionBody
							className="text-center font-semibold text-base lg:text-lg p-5 bg-primary text-white rounded-lg h-[110px] ease-in-out duration-100"
							style={{ color: "white", fontFamily: "Poppins" }}
						>
							Email UB bertujuan untuk memastikan bahwa kamu salah
							satu dari mahasiswa FILKOM UB serta sebagai media
							konfirmasi setelah kamu melakukan pendaftaran ULTKSP
							dan Konseling.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 3}
						onClick={() => handleOpen(3)}
						className={`${
							open === 3
								? "text-white bg-primary"
								: "text-primary bg-white"
						} cursor-pointer md:mb-5 rounded-lg mb-3`}
					>
						<div className="content-center ">
							<div
								className={`flex flex-row justify-between text-primary text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-5 items-center align-middle`}
							>
								<div
									className={`${
										open === 3
											? "text-white"
											: "text-primary"
									} text-5xl`}
								>
									<ion-icon
										name="help-circle-outline"
										className=""
									></ion-icon>
								</div>

								<h1
									className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ${
										open === 3
											? "text-white"
											: "text-primary"
									}`}
								>
									Apakah kerahasiaan data saya terjamin?
								</h1>

								<div
									className={`${
										open === 3
											? "text-white -rotate-90"
											: "text-primary"
									} text-3xl content-center ease-in-out duration-100`}
								>
									<ion-icon
										name="caret-forward-outline"
										className="items-center"
									></ion-icon>
								</div>
							</div>
						</div>
						<AccordionBody
							className="text-center font-semibold text-base lg:text-lg p-5 bg-primary text-white rounded-lg h-[110px] ease-in-out duration-100"
							style={{ color: "white", fontFamily: "Poppins" }}
						>
							Tidak perlu khawatir, privasi dan kerahasiaan Anda
							adalah prioritas kami. Segala data dan identitas
							hanya digunakan untuk kepentingan konseling.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 4}
						onClick={() => handleOpen(4)}
						className={`${
							open === 4
								? "text-white bg-primary"
								: "text-primary bg-white"
						} cursor-pointer md:mb-5 rounded-lg mb-3`}
					>
						<div className="content-center ">
							<div
								className={`flex flex-row justify-between text-primary text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-5 items-center align-middle`}
							>
								<div
									className={`${
										open === 4
											? "text-white"
											: "text-primary"
									} text-5xl`}
								>
									<ion-icon
										name="help-circle-outline"
										className=""
									></ion-icon>
								</div>

								<h1
									className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ${
										open === 4
											? "text-white"
											: "text-primary"
									}`}
								>
									Bagaimana menentukan jadwal konseling saya?
								</h1>

								<div
									className={`${
										open === 4
											? "text-white -rotate-90"
											: "text-primary"
									} text-3xl content-center ease-in-out duration-100`}
								>
									<ion-icon
										name="caret-forward-outline"
										className="items-center"
									></ion-icon>
								</div>
							</div>
						</div>
						<AccordionBody
							className="text-center font-semibold text-base lg:text-lg p-5 bg-primary text-white rounded-lg h-[110px] ease-in-out duration-100"
							style={{ color: "white", fontFamily: "Poppins" }}
						>
							Untuk jadwal konseling akan dijadwalkan oleh
							kemahasiswaan dan diinformasikan lebih lanjut
							melalui contact person yang telah kamu berikan pada
							saat pendaftaran.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 5}
						onClick={() => handleOpen(5)}
						className={`${
							open === 5
								? "text-white bg-primary"
								: "text-primary bg-white"
						} cursor-pointer md:mb-5 rounded-lg mb-3`}
					>
						<div className="content-center ">
							<div
								className={`flex flex-row justify-between text-primary text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-5 items-center align-middle`}
							>
								<div
									className={`${
										open === 5
											? "text-white"
											: "text-primary"
									} text-5xl`}
								>
									<ion-icon
										name="help-circle-outline"
										className=""
									></ion-icon>
								</div>

								<h1
									className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ${
										open === 5
											? "text-white"
											: "text-primary"
									}`}
								>
									Siapa yang akan melayani saat konseling?
								</h1>

								<div
									className={`${
										open === 5
											? "text-white -rotate-90 "
											: "text-primary"
									} text-3xl content-center ease-in-out duration-100`}
								>
									<ion-icon
										name="caret-forward-outline"
										className="items-center"
									></ion-icon>
								</div>
							</div>
						</div>
						<AccordionBody
							className="text-center font-semibold text-base lg:text-lg p-5 bg-primary text-white rounded-lg h-[110px] ease-in-out duration-100"
							style={{ color: "white", fontFamily: "Poppins" }}
						>
							Saat konseling kamu akan dilayani oleh psikolog dari
							fakultas atau teman sebaya yang sudah terverifikasi
							keahlianya.
						</AccordionBody>
					</Accordion>
				</div>
			</div>
		</Fragment>
	);
}
