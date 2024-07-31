import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import React from 'react';
import hero from '../assets/hero.jpg';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
  const {homeRef, aboutRef, contactRef}=useContext(AppContext);
  return (
    <div className="home-section w-full overflow-hidden" data-section="home" id='home'>
      {/* Hero Section */}
      <section ref={homeRef} className="relative h-screen">
        <img 
          className="absolute -z-10 object-cover w-full h-full mirrored "
          src={hero}
          alt="heroImage"
        />
        <div className="absolute top-[180px] left-[20px]">
          <div className='uppercase leading-[2.5rem] sm:leading-[4.5rem] md:leading-[5rem] text-[29px] sm:text-[59px] md:text-[70px] custom-text noto-serif-logo'>
            Ignite <br/> Transformation
          </div>
          <div className='text-[20px] sm:text-[30px] md:text-[40px] text-white uppercase font-bold noto-serif-logo'>
            & Unite your Strength
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" >
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
