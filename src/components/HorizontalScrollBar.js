import React, { useState } from 'react';
import bodyPartImg from '../assets/bodyParts.png';
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const HorizontalScrollBar = ({ bodyParts,setSelectedBodyPart,selectedBodyPart,search,setSearch }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const itemsPerPage = 4;
  console.log(bodyParts);
  // Ensure bodyParts and bodyParts.data are defined
  const chunkedBodyParts = [];
  if (bodyParts && !bodyParts.includes('All')) {
    bodyParts = ['All', ...bodyParts];
  }
  if (bodyParts) {
    for (let i = 0; i < bodyParts.length; i += itemsPerPage) {
      chunkedBodyParts.push(bodyParts.slice(i, i + itemsPerPage));
    }
  }

  const handleNext = () => {
    if (scrollIndex < chunkedBodyParts.length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-[50px] overflow-hidden'>
      
      {/* Progress bar */}
      <div className='flex justify-between items-center space-x-3 w-[100px] sm:w-[200px] md:w-[300px] lg:w-[400px] mb-4 sm:mb-5 md:mb-6 lg:mb-9 '>
        {chunkedBodyParts.map((_, index) => (
          <div key={index} className={`h-[2px] w-full rounded-lg ${scrollIndex === index ? 'bg-slate-900' : 'bg-slate-400'}`}></div>
        ))}
      </div>

      {/* Blocks */}
      <div className='relative w-full overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
        >
          {chunkedBodyParts.map((chunk, chunkIndex) => (
            <div key={chunkIndex} 
            
            className='flex sm:flex-row flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 py-4 sm:mb-3 md:mb-4 w-full flex-shrink-0'>
              
              {chunk.map((bodyPart, index) => (
                <div key={index} 
                  onClick={() => {
                    setSelectedBodyPart(bodyPart);
                    setSearch('');
                    window.scrollTo({ top: document.querySelector('.results-section').offsetTop, behavior: 'smooth' });
                  }}
                 className={`${selectedBodyPart===bodyPart && search==='' ? " border-slate-600 border scale-110 underline" : ""} flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 lg:p-10 bg-slate-100 rounded-md shadow-md sm:shadow-lg shadow-slate-400 hover:bg-slate-300 hover:underline underline-offset-8 decoration-cyan-900 transition duration-500 hover:scale-110 hover:cursor-pointer w-[200px] sm:w-[120px] md:w-[140px] lg:w-[170px] h-[150px] sm:h-[120px] md:h-[140px] lg:h-[160px]`}>
                  <div>
                    <img src={bodyPartImg} alt='bodyPartImg' className='w-[30px] sm:w-[30px] md:w-[40px]' />
                  </div>
                  <div className='text-center text-wrap text-lg sm:text-md md:text-lg lg:text-xl font-medium text-cyan-950 capitalize'>{bodyPart}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Left and right arrow */}
      <div className='flex justify-end space-x-4 w-[350px] sm:w-[500px] md:w-[550px] lg:w-[700px] mb-5'>
        <button onClick={handlePrev} className=' text-black hover:scale-125 hover:cursor-pointer text-md sm:text-lg md:text-xl lg:text-2xl transition duration-500' disabled={scrollIndex === 0}>
        <IoArrowBackOutline />
        </button>
        <button onClick={handleNext} className=' text-black hover:scale-125 hover:cursor-pointer text-md sm:text-lg md:text-xl lg:text-2xl transition duration-500' disabled={scrollIndex === chunkedBodyParts.length - 1}>
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
}

export default HorizontalScrollBar;
