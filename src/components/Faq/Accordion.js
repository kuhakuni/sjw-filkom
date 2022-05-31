import React, { useState } from 'react';
import Arrows from '../../assets/img/arrow.svg'

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false); //faq1

  return (
    <div className="accordion-item ">
      <div className="content-center " onClick={() => setIsActive(!isActive)}>
        <div className={isActive ? 'bg-primary accordion-question flex flex-row mb-3 md:mb-5 rounded-lg justify-around items-center text-white' : 'bg-white accordion-question flex flex-row mb-3 md:mb-5 rounded-lg justify-around items-center text-primary'}>
          <h1 className=' text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-10/12 text-center '>
            {question}
          </h1>
          {
            isActive ? 
      
              <img
                className='w-12 md:w-16 -rotate-90 ease-in duration-300 '
                alt='missing icon'
                src={Arrows}
                >
              </img>
        
          : 
    
              <img
                className='w-12 md:w-16 '
                alt='missing icon'
                src={Arrows}
                >
              </img>
        
        }
        </div>
      {isActive && <div className="accordion-answer mb-3 bg-primary text-white p-5 ease-in duration-300">{answer}</div>}
    </div>
    </div>
  );
};

export default Accordion; 