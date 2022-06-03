import React from "react";
import styles from "./Struktur.module.css";
import Struktur from "../../assets/img/Struktur.png";

const Struk = ()  => {
    return(
         <div className={`${styles.container} p-10 md:p-16`} id="struktur">
             <h1 className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl md:pb-10"> Struktur Konselor Sebaya </h1>
             <img
                className="pt-4 px-2 xsm:px-5 xsm3:px-10 xsm3:pt-6"
                alt="missing struktur"
                src={Struktur}
                >
             
             </img>
         </div>
    );
};
export default Struk;


