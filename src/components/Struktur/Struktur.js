import React from "react";
import styles from "./Struktur.module.css";

const Struk = ()  => {
    // const strukPicture = {
	// 	minHeight: "50vh",
	// 	background: `url(/assets/img/Struktur.png) center center / cover no-repeat`,
	// };
    return(
         <div className={`${styles.container} p-10 md:p-16 flex justify-center flex-col`} id="struktur">
             <h1 className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl md:pb-10 "> Struktur Konselor Sebaya </h1>
             <img
                className="pt-4 px-2 xsm:px-5 xsm3:px-10 xsm3:pt-6"
                alt="missing struktur"
                src="/assets/img/Struktur.png"
                >
             </img>
         </div>
    );
};
export default Struk;


