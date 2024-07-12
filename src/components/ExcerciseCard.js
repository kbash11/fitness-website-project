import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const ExcerciseCard = ({exercise}) => {
  const navigate=useNavigate();
  return (
    <div className='bg-sky-50 rounded-lg shadow-md p-4'>
        <NavLink to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} className='w-full h-[100px] sm:h-[200px] object-cover mb-2 rounded-t-lg '  />
            <div className='flex gap-2 text-xs sm:text-sm mb-1'>
              <p className=' bg-sky-300 rounded-md p-1'>{exercise.target}</p>
              <p className=' bg-amber-300 rounded-md p-1'>{exercise.bodyPart}</p>
            </div>
            <h2 className='text-md sm:text-lg font-medium capitalize'>{exercise.name}</h2>
            
            <button onClick={()=>navigate(`/excercise/${exercise.id}`)} className="italic text-xs text-blue-500 underline underline-offset-2">View details</button>
        </NavLink>
    </div>
  )
}

export default ExcerciseCard
