import React from "react";
import styles from "./Layanan.module.css";
import LayananCard from "./LayananCard";
const Layanan = () => {
	return (
		<>
			<div className={`${styles.container} min-h-screen`} id="layanan">
				<div className="container py-16">
					<div className="text-primary text-center mb-10">
						<h1 className="font-bold text-5xl mb-5">
							Tahukah kamu?
						</h1>
						<p className="font-semibold text-2xl">
							Kondisi psikologi seorang mahasiswa sangat
							berpengaruh terhadap akademiknya. Masalah-masalah
							kecil adalah pemicu menuju masalah-masalah yang
							lebih besar dan tidak boleh dianggap remeh.
						</p>
					</div>
					<div className="flex justify-center">
						<div className="grow leading-tight text-4xl p-8 font-bold text-center text-white bg-secondary">
							Layanan yang disediakan
						</div>
					</div>
					<div className="grid lg:grid-cols-2 gap-4 my-8">
						<LayananCard
							title={"Layanan UTLKSP"}
							content={
								"Pelayanan pendampingan dan pelaporan bagi korban kekerasan seksual dan perundungan"
							}
						/>
						<LayananCard
							title={"Layanan Konseling"}
							content={
								"Pelayanan konseling meliputi masalah pribadi, sosial, bimbingan belajar, bimbingan karir."
							}
						/>
						<LayananCard
							title={"Layanan Konseling Sebaya"}
							content={
								" Pelayanan konseling dengan teman sebaya yang telah tersertifikasi untuk menceritakan masalah yang sedang kamu hadapi."
							}
							button={"Selengkapnya"}
						/>
						<LayananCard
							title={"Buku Saku"}
							content={
								"Buku panduan bagi mahasiswa yang berisikan edukasi kekerasan seksual dan perundungan serta alur dalam pelaporannya."
							}
							button={"Download"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layanan;
