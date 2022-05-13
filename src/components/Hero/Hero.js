import React from "react";
import bg from "../../assets/img/bg-header.png";

const Hero = () => {
	const hero = {
		minHeight: "90vh",
		background: `url(${bg}) center center / cover no-repeat`,
	};
	return (
		<div className={`flex text-white items-center`} style={hero}>
			<div className="container lg:grid lg:grid-cols-2 gap-4 my-8">
				<h1 className="text-5xl lg:text-7xl lg:leading-tight font-bold">
					Karena saling jaga adalah sebuah kewajiban.
				</h1>
				<div className="mt-8">
					<p className="text-xl font-semibold text-justify">
						SJW (Saling Jaga Warga) FILKOM adalah program kerja
						Kementerian Sosling BEM FILKOM yang menyediakan layanan{" "}
						<span className="text-secondary font-bold">
							konseling serta pelaporan
						</span>{" "}
						kekerasan seksual dan perundungan. SJW FILKOM juga
						bekerja sama dengan Kemahasiswaan Fakultas Ilmu Komputer
						untuk memberikan pelayanan terbaik serta menciptakan
						ruang aman dan nyaman bagi mahasiswa dalam mengatasi
						masalah yang dihadapi.
					</p>
					<div className="flex">
						<a
							href="https://forms.gle/6qSj84xn6sXAbsfz6"
							target="blank"
							className="grow mt-10 bg-tertiary font-bold text-base py-5 text-center"
						>
							Daftar yuk!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
