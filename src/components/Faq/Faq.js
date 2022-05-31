import React from 'react';
import Accordion from './Accordion';
import { dataFaq } from '../../utils/data';

const Faq = () => {
  return (
    <div>
      <div className="accordion">
    <div className="bg-secondary pb-3" id="faq">
      <div>
        <h1 className="text-center text-primary font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl pt-10 pb-3 md:pb-8">
        Frequently Asked Questions
        
        </h1>
      </div>

      <div className='max-w-lg md:max-w-7xl container'>
        {dataFaq.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      </div>
      
    </div>

    //   </div>
    // </div>
  );
};

export default Faq;