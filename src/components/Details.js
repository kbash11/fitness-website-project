import React from 'react';
import bodyPartIcon from '../assets/body-part.png';
import targetIcon from '../assets/target.png';
import equipmentIcon from '../assets/equipment.png';

const Details = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, target, equipment, instructions, secondaryMuscles } = exerciseDetail;

  // Ensure instructions are a string and split into an array
  const instructionText = instructions ? instructions.toString() : '';
  const instructionPoints = instructionText.split('.').filter(point => point.trim() !== '');

  return (
    <div className="flex flex-col lg:flex-row w-full p-4 lg:space-x-8 space-y-5 lg:space-y-14 ">
      <div className="w-full lg:w-1/2 mt-12 lg:mt-16">
        <img src={gifUrl} alt="gif" className="w-full h-auto rounded-lg shadow-md object-cover" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-2 text-amber-500 uppercase text-center">{name}</h1>
        
        <div className='flex items-center space-x-4 my-2 capitalize'>
            <div className='bg-amber-100 p-2 rounded-full'>
            <img src={bodyPartIcon} alt="body part" className="w-[30px] h-[30px] inline object-cover" />
            </div>
            <div className="text-lg text-gray-100 mb-1"> {bodyPart}, {secondaryMuscles}</div>
        </div>
        <div className='flex items-center space-x-4 my-2 capitalize'>
            <div className='bg-amber-100 p-2 rounded-full'>
                <img src={targetIcon} alt="target" className="w-[30px] h-[30px] inline object-cover" />
            </div>
            <div className="text-lg text-gray-100 mb-1"> {target}</div>
        </div>
        <div className='flex items-center space-x-4 my-2 capitalize'>
            <div className='bg-amber-100 p-2 rounded-full'>
                <img src={equipmentIcon} alt="equipment" className="w-[30px] h-[30px] inline object-cover" />
            </div>
            <div className="text-lg text-gray-100 mb-1"> {equipment}</div>
        </div>
        
        <div className='w-10/12 h-[1.5px] bg-slate-400 rounded-full opacity-40 my-3'></div>
        
        <div className="text-xl underline underline-offset-8 decoration-dotted text-yellow-300 mb-1"><strong>Instructions:</strong></div>
        <ul className="list-disc list-inside text-lg text-gray-200 ml-6 mt-2">
          {instructionPoints.map((point, index) => (
            <li key={index} className="mb-1">{point.replace(/^,?\s*/, '')}.</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
