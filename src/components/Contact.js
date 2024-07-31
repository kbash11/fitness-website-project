import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section w-full min-h-screen flex flex-col items-center p-4 bg-gradient-to-b from-sky-900 to-sky-600 text-white" data-section="contact" id='contact' >
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] custom-text mt-8">
          Contact Us
        </h1>
        <p className="text-[25px] sm:text-[35px] md:text-[40px] font-semibold mt-4">
          We are here to assist you.
        </p>
        <form className="text-[16px] sm:text-[20px] md:text-[24px] mt-4">
          <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="message"
              id="floating_message"
              className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              rows="4"
              required
            ></textarea>
            <label
              htmlFor="floating_message"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button type="submit" className="px-4 py-2 mt-4 bg-blue-900 rounded hover:bg-blue-950 shadow-md shadow-black transition-colors duration-300">
            Send Message
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-4  ">
          <a href="https://facebook.com" className="text-2xl hover:text-blue-300 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-2xl hover:text-blue-300 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-2xl hover:text-pink-300 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-2xl hover:text-blue-300 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
