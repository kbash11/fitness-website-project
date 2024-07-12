import { React, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import dashboardImg from '../assets/kettlebell-towel-closeup-gym-scene.jpg';
import { TypeAnimation } from 'react-type-animation';

const Dashboard = () => {
  const { loginFormData } = useContext(AppContext);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <img src={dashboardImg} alt='dashboard-img' loading='lazy' className='absolute -z-10 object-cover w-full h-full mirrored' />
      <div className='absolute top-[140px] left-[25px] w-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px]'>
        <h1 className='font-bold text-3xl md:text-5xl text-amber-500 leading-[2.5rem] sm:leading-[3rem] md:leading-[5rem]'>
          Welcome,<br/>
          <span style={{ color: '#00246B' }} className='sm:drop-shadow noto-serif-logo custom-text uppercase font-extrabold text-4xl md:text-6xl'>
            {loginFormData.firstName} {loginFormData.lastName}
          </span>
        </h1>
        <div className='text-white text-lg sm:text-3xl roboto-medium mt-[10px] sm:mt-[30px]'>
          <TypeAnimation
            sequence={[
              'Our services includes preparing diet plans,',
              1000,
              'Our services include preparing workout plans,',
              1000,
              'Our services include an Ask AI feature',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
