import React from 'react'
import FILKOM from "../../assets/img/FILKOM.png";
import BEM from "../../assets/img/BEM.png";
import styles from "./Logo.module.css"

const Logo = () => {
    return(
        <>
        <div className={`${styles.container}  flex justify-center h-auto py-10 px-10`}>
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <img
                src={BEM}
                className="w-64 md:w-80 md:h-80 place-self-center"
                alt='missing logo'
                >
            </img>
            <img
                src={FILKOM}
                className="place-self-center"
                alt='missing logo'
            >
            </img>
            </div>
            
        </div>
        </>
    )
}
export default Logo