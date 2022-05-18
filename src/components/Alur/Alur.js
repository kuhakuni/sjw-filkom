import React from 'react'
import styles from "./Alur.module.css"
import List from "../../assets/img/alur.svg";
const Alur = () => {
    return(
        <>
            <div className={`${styles.container}  pb-10 pt-12 px-6 sm:px-16 md:px-28 lg:px-40 xl:px-64`}>
                <h1 className='text-tertiary text-center font-bold text-xl pb-3 sm:text-xl md:text-3xl lg:text-4xl'>
                    Alur Pendaftaran
                </h1>
                <p className='text-center text-primary font-semibold text-sm sm:text-lg md:text-xl'>
                    Yuk, mulai buka suara sama masalah yang kamu alami
                </p>
                
                <div className='bg-primary py-8 pl-5 pr-6 mt-5 text-white font-semibold text-sm flex justify-center'>
                    <div className=' mr-4'>
                        <img
                            src={List}
                            alt="missing list"
                            className='max-h-72 min-h-full xsm3:max-h-56 sm:max-h-72 sm:min-h-46 md:min-h-72 md:max-h-fit'
                        >
                        </img>
                    </div>
                    <div className=''>
                        <h1 className='pb-10 xsm:text-base md:text-4xl'>Klik tombol “Daftar Yuk!” di bagian atas </h1>
                        <h1 className='pb-10 xsm:text-base md:text-4xl'>Isi google form yang telah disediakan untuk pendaftaran </h1>
                        <h1 className='pb-10 xsm:text-base md:text-4xl'>Pilih layanan yang kamu inginkan pada google form. </h1>
                        <h1 className='xsm:text-base sm:text-2xl '>Tunggu email konfirmasi yang akan dikirimkan. </h1>
                    </div>  
                </div>

            </div>
        </>
    );
}
export default Alur