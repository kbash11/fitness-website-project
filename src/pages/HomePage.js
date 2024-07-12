import React from 'react';
import hero from '../assets/hero.jpg'

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img 
        className="absolute -z-10 object-cover w-full h-full mirrored"
        src={hero}
        alt="Hero"
        loading="lazy"
      />
      <div className="absolute top-[180px] left-[20px]"> 
        <div className='uppercase leading-[2.5rem] sm:leading-[4.5rem] md:leading-[5rem] text-[29px] sm:text-[59px] md:text-[70px]  custom-text noto-serif-logo'>  {/* Inline styles */}
          Ignite <br/> Transformation
        </div>
        <div className='text-[20px] sm:text-[30px] md:text-[40px] text-white uppercase font-bold noto-serif-logo'>  {/* Inline styles */}
          & Unite your Strength
        </div>
      </div>
    </div>
  );
};



export default HomePage;
