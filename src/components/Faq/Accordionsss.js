import { useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { Fragment } from "react";
import Tanya from "../../assets/img/tanda tanya.svg"
import Arrows from '../../assets/img/arrow.svg'
export default function Example() {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<Fragment>
			<div className="bg-secondary pb-3" id="faq">
				<div>
					<h1 className="text-center text-primary font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl pt-10 pb-3 md:pb-8">
						Frequently Asked Questions
					</h1>
				</div>

				<div className="max-w-lg md:max-w-7xl container">
					
					<Accordion
						open={open === 1}
						onClick={() => handleOpen(1)}
						className="bg-white mb-3 md:mb-5 rounded-lg"
					>
						<div className="content-center">
							<div className="flex flex-row justify-around text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10 items-center">
							
								<h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ">Apa perbedaan ULTKSP dan Konseling?</h1>
								{
									open === 1 ?

									<img
                					className='w-12 md:w-16 -rotate-90 ease-in duration-75'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								  :
								  <img
                					className='w-12 md:w-16'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								}
								
							</div>
						</div>

						
						<AccordionBody className="p-5 text-center font-semibold text-xs">
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
						className="bg-white mb-3 md:mb-5 rounded-lg"
					>
						
						<div className="content-center">
							<div className="flex flex-row justify-around text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10 items-center">
							
								<h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ">Mengapa harus menggunakan email UB saat mendaftar ULTKSP atau Konseling?</h1>
								{
									open === 2 ?

									<img
                					className='w-12 md:w-16 -rotate-90 ease-in duration-75'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								  :
								  <img
                					className='w-12 md:w-16'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								}
								
							</div>
						</div>

						<AccordionBody className="p-5 text-center font-semibold text-xs">
							Email UB bertujuan untuk memastikan bahwa kamu salah
							satu dari mahasiswa FILKOM UB serta sebagai media
							konfirmasi setelah kamu melakukan pendaftaran ULTKSP
							dan Konseling.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 3}
						onClick={() => handleOpen(3)}
						className="bg-white mb-3 md:mb-5 rounded-lg"
					>
						<div className="content-center">
							<div className="flex flex-row justify-around text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10 items-center">
							
								<h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ">Apakah kerahasiaan data saya terjamin?</h1>
								{
									open === 3 ?

									<img
                					className='w-12 md:w-16 -rotate-90 ease-in duration-75'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								  :
								  <img
                					className='w-12 md:w-16'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								}
								
							</div>
						</div>

						<AccordionBody className="p-5 text-center font-semibold text-xs">
							Tidak perlu khawatir, privasi dan kerahasiaan Anda
							adalah prioritas kami. Segala data dan identitas
							hanya digunakan untuk kepentingan konseling.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 4}
						onClick={() => handleOpen(4)}
						className="bg-white mb-3 md:mb-5 rounded-lg"
					>
						<div className="content-center">
							<div className="flex flex-row justify-around text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10 items-center">
							
								<h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ">Bagaimana menentukan jadwal konseling saya?</h1>
								{
									open === 4 ?

									<img
                					className='w-12 md:w-16 -rotate-90 ease-in duration-75'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								  :
								  <img
                					className='w-12 md:w-16'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								}
								
							</div>
						</div>

						<AccordionBody className="p-5 text-center font-semibold text-xs">
							Untuk jadwal konseling akan dijadwalkan oleh
							kemahasiswaan dan diinformasikan lebih lanjut
							melalui contact person yang telah kamu berikan pada
							saat pendaftaran.
						</AccordionBody>
					</Accordion>

					<Accordion
						open={open === 5}
						onClick={() => handleOpen(5)}
						className="bg-white mb-3 md:mb-5 rounded-lg"
					>
						<div className="content-center">
							<div className="flex flex-row justify-around text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10 items-center">
							
								<h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center ">Siapa yang akan melayani saat konseling?</h1>
								{
									open === 5 ?

									<img
                					className='w-12 md:w-16 -rotate-90 ease-in duration-75'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								  :
								  <img
                					className='w-12 md:w-16'
                					alt='missing icon'
                					src={Arrows}
                				>
              					</img>
								}
								
							</div>
						</div>

						<AccordionBody className="p-5 text-center font-semibold text-xs">
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
