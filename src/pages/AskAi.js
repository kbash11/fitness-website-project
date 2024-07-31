import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import { IoReorderThree } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";

const AskAI = () => {
  const { 
    loginFormData,
    prevPrompts,
    onSent, 
    resultData, 
    loading, 
    input, 
    setInput,
    setResultData
  } = useContext(AppContext);

  const [displayedText, setDisplayedText] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  
  useEffect(() => {
    if (resultData) {
      let index = 0;
      setDisplayedText('');
      const interval = setInterval(() => {
        if (index < resultData.length) {
          setDisplayedText((prev) => prev + resultData.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust typing speed here
      return () => clearInterval(interval);
    }
  }, [resultData]);

  const submitHandler = (e) => {
    e.preventDefault();
    onSent();
  };

  const handlePromptClick = (prompt) => {
    setSelectedPrompt(prompt);
    setInput('');
    setResultData(prompt.response);
  };

  const handleNewChat = () => {
    setSelectedPrompt(null);
    setInput('');
    setResultData('');
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className="flex h-full w-screen bg-gray-800 text-white">
      <div className='bg-gray-700 flex flex-col w-[65px] h-screen'>
        <div onClick={() => setSidebar(true)}
          className='absolute top-[70px] left-[10px] rounded-full hover:bg-gray-300 hover:text-gray-800 transition-all duration-300 hover:cursor-pointer'>
          <IoReorderThree className='text-[30px]' />
        </div>
        <div onClick={handleNewChat} className='absolute top-[150px] left-[10px] rounded-full bg-gray-500 p-2 hover:cursor-pointer'>
          <FaPlus className='text-[15px]' />
        </div>
      </div>
      {
        sidebar && (
          <div className='bg-gray-700 flex flex-col justify-center items-center w-[200px] h-screen absolute sm:static z-10'>
            <div onClick={() => setSidebar(false)}
              className='absolute top-[70px] left-[10px] rounded-full hover:bg-gray-300 hover:text-gray-800 hover:cursor-pointer transition-all duration-300'>
              <IoReorderThree className='text-[30px]' />
            </div>
            <div className='flex justify-center items-center gap-1 absolute top-[150px] left-[10px] rounded-3xl bg-gray-500 p-2 hover:cursor-pointer'
              onClick={handleNewChat}>
              <FaPlus className='text-[15px]' />
              <p className='text-sm opacity-70'>New Chat</p>
            </div>
            <div className='absolute top-[200px] left-[10px]'>
              <h1 className='mb-2'>Recent</h1>
              <div className='flex flex-col gap-3'>
                {prevPrompts.length === 0 ? (
                  <p className='text-sm'>No recent chats</p>
                ) : (
                  prevPrompts.map((prompt, index) => (
                    <div key={index} className='flex justify-center items-center gap-3'>
                      <TiMessage onClick={() => handlePromptClick(prompt)} />
                      <p className='text-sm'>{truncateText(prompt.prompt, 15)}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )
      }
      <div className="flex flex-col h-full w-full flex-grow p-8 mt-[50px]">
        <h1 className="text-5xl text-center font-bold uppercase gradient-text mb-3">
          Hello, {loginFormData.firstName}
        </h1>
        <section className="flex-grow relative">
          <h2 className="mb-8 text-xl font-semibold text-center opacity-50">
            How can I help you today?
          </h2>
          
          {!resultData && !loading && (
            <div className="grid grid-cols-2 gap-2 mb-8 md:grid-cols-4 p-4 text-sm md:text-md md:gap-6">
              <div className="p-6 bg-gray-700 rounded-lg">
                <p>" Develop a balanced workout and nutrition plan for someone new to the gym. "</p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg">
                <p>" I have knee pain. What modifications can I make to my workout? "</p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg">
                <p>" I've hit a weightlifting plateau. How can I break through? "</p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg">
                <p>" How long should my workouts be for optimal results? "</p>
              </div>
            </div>
          )}

          {loading ? (
            <div className='flex justify-center items-center'><Spinner /></div>
          ) : (
            resultData && (
              <div className="p-4 mt-4 mb-5 bg-gray-700 rounded-lg w-11/12 mx-auto">
                <h2 className="mb-2 text-lg font-bold">Response:</h2>
                <p>{displayedText}</p>
              </div>
            )
          )}

        </section>
        <footer className='fixed bottom-0 right-[0.1rem] flex flex-col justify-center items-center bg-gray-800 p-2 w-full z-20'>
          <form onSubmit={submitHandler} className="flex items-center w-11/12">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow px-4 py-2 mr-4 text-white bg-gray-600 rounded-lg focus:outline-none"
              placeholder="Enter a prompt here"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Send'}
            </button>
          </form>
          <div className='text-xs md:text-md w-11/12 opacity-60 text-red-500 italic text-center my-2'>
            <sup>*</sup>AI may display inaccurate info, including about people, so double-check its responses.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AskAI;
