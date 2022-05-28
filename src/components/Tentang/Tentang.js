import React from "react";
import styles from "./Tentang.module.css";
const Tentang = () => {
	return (
		<>
			<div className={`${styles.container}`} id="tentang">
				<div className="container py-16">
					<div className="mb-16">
						<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
							Tentang Konseling Sebaya
						</h1>
						<p className="text-base md:text-lg lg:text-xl text-justify">
							<span className="font-bold">Konseling sebaya</span>{" "}
							adalah layanan kegiatan konseling bersama dengan
							teman sebaya untuk mahasiswa FILKOM. Pada konseling
							sebaya, kamu dan konselor sebaya akan berinteraksi
							dan berdiskusi untuk menghadapi masalah yang kamu
							hadapi. Dengan harapan, kamu bisa menyelesaikan
							masalahmu dengan cara terbaik. Badan konselor sebaya
							yang akan melayani kamu adalah Rekan Melangkah.
						</p>
					</div>
					<div className="mb-16">
						<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
							Tentang Rekan Melangkah
						</h1>
						<p className="text-base md:text-lg lg:text-xl text-justify mb-5">
							<span className="font-bold">Rekan melangkah</span>{" "}
							adalah badan konselor sebaya di FILKOM UB dari BEM
							Fakultas Ilmu Komputer Universitas Brawijaya yang
							bertujuan untuk memberikan pelayanan konseling
							melalui layanan konseling sebaya. Dimulai dari
							konseling permasalahan perkuliahan, pergaulan, dan
							sebagainya.
						</p>
						<p className="text-base md:text-lg lg:text-xl text-justify mb-5">
							<span className="font-bold">Rekan melangkah</span>{" "}
							juga berperan aktif dalam mengedukasi mahasiswa
							mengenai kesehatan mental yang sedang dialami dan
							yang sering terjadi. Serta mewujudkan mahasiswa
							FILKOM yang lebih peka terhadap kesehatan mental
							masing-masing atau orang terdekatnya.
						</p>
					</div>
					<div className="mb-16">
						<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
							Fakta Unik
						</h1>
						<p className="text-base md:text-lg lg:text-xl text-justify">
							Teman dan keluarga dapat menjadi pengaruh penting
							untuk membantu seseorang mendapatkan perawatan dan
							layanan yang mereka butuhkan
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tentang;
