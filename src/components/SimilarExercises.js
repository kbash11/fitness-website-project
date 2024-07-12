import React from 'react';
import Spinner from '../components/Spinner';
import { NavLink } from 'react-router-dom';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  
  return (
    <div className='flex flex-col p-4'>
      <h2 className='text-2xl md:text-3xl font-semibold text-amber-400 mb-5 ml-4'>Exercises that target the same muscle group</h2>
      <div className='flex flex-wrap gap-5 justify-center'>
        {!targetMuscleExercises ? (
          <Spinner />
        ) : (
          targetMuscleExercises.slice(0, 4).map((exercise) => (
            <NavLink onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/exercise/${exercise.id}`} key={exercise.id}>
              <div className='flex flex-col items-center my-2 bg-white rounded-lg p-3 hover:scale-105 transition-all duration-600'>
                <img src={exercise.gifUrl} alt={exercise.name} className='w-full h-[250px] object-cover rounded-md' />
                <div className='w-10/12 h-[1px] bg-black opacity-20 my-4'></div>
                <h3 className='text-md font-semibold capitalize text-center text-amber-900'>{exercise.name}</h3>
              </div>
            </NavLink>
          ))
        )}
      </div>

      <h2 className='text-2xl md:text-3xl font-semibold text-amber-400 mb-5 mt-8 ml-4'>Exercises that uses the same equipment</h2>
      <div className='flex flex-wrap gap-5 justify-center'>
        {!equipmentExercises ? (
          <Spinner />
        ) : (
          equipmentExercises.slice(0, 4).map((exercise) => (
            <NavLink onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/exercise/${exercise.id}`} key={exercise.id}>
              <div className='flex flex-col items-center my-2 bg-white rounded-lg p-3 hover:scale-105 transition-all duration-600'>
                <img src={exercise.gifUrl} alt={exercise.name} className='w-full h-[250px] object-cover rounded-md' />
                <div className='w-10/12 h-[1px] bg-black opacity-20 my-4'></div>
                <h3 className='text-md font-semibold capitalize text-center text-amber-900'>{exercise.name}</h3>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
