import React from 'react'
import styles from "./Alur.module.css"

const Alur = () => {
    return(
        <>
            <div className={`${styles.container} min-h-screen py-12 px-6`}>
                <h1 className='text-tertiary text-center font-bold text-xl pb-3'>
                    Alur Pendaftaran
                </h1>
                <p className='text-center text-primary font-semibold text-sm'>
                    Yuk, mulai buka suara sama masalah yang kamu alami
                </p>

                <div className='bg-primary py-8 px-10 mt-5 text-white font-semibold text-sm'>
                    <h2 className='pb-8'>Klik tombol “Daftar Yuk!” di bagian atas </h2>
                    <h2 className='pb-8'>Isi google form yang telah disediakan untuk pendaftaran </h2>
                    <h2 className='pb-8'>Pilih layanan yang kamu inginkan pada google form. </h2>
                    <h2 className=''>Tunggu email konfirmasi yang akan dikirimkan. </h2>
                </div>
            </div>
        </>
    );
}
export default Alur