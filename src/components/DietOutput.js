import React, { useContext } from 'react';
import { FaGripfire } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';


const DietOutput = () => {
  const {mealPlan,dietOutputRef}=useContext(AppContext);
  if (!mealPlan) {
    return null;
  }

  const { daily_calorie_needs, total_protein, total_carbs, total_fats, meals, quote } = mealPlan;


  return (
    <div ref={dietOutputRef} className=" flex flex-col justify-center items-center p-6 ">
      
      <h2 className="text-3xl font-bold mb-4 text-center uppercase text-blue-950 drop-shadow">Your Diet Plan</h2>

      <div className="mb-5 w-full max-w-[900px] flex flex-col justify-center items-center bg-gradient-to-b from-sky-500 to-cyan-200 gap-3 rounded-md shadow-lg shadow-cyan-950 p-3 ">
        <h3 className="text-xl font-semibold">Daily Nutritional Summary</h3>
        
        <div className='grid grid-cols-2 gap-6 gap-x-8'>
          <p><strong>Total Calories intake:</strong> {daily_calorie_needs} kcal</p>
          <p><strong>Total Protein intake:</strong> {total_protein} g</p>
          <p><strong>Total Carbs intake:</strong> {total_carbs} g</p>
          <p><strong>Total Fats intake:</strong> {total_fats} g</p>
        </div>
      </div>

      <div className="mb-4 max-w-[900px] grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gradient-to-b from-sky-200 to-cyan-200 rounded-md shadow-lg shadow-cyan-950 p-5 px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center col-span-full">Meals </h3>
        {meals.map((meal, index) => (
          <div key={index} className="mb-4 flex flex-col gap-2 bg-gradient-to-r from-indigo-950 to-sky-600 rounded-md p-3 shadow-lg shadow-sky-700 text-slate-200">
            <h4 className="text-2xl font-bold text-center text-amber-400">{meal.meal_name}</h4>
            <p className='text-md'><strong className='text-lg underline underline-offset-4'>Items:</strong> {meal.items}</p>
            <p className='text-md'><strong className='text-lg underline underline-offset-4'>Calories:</strong> {meal.calories} kcal</p>
            <p className='text-md'><strong className='text-lg underline underline-offset-4'>Protein:</strong> {meal.protein} g</p>
            <p className='text-md'><strong className='text-lg underline underline-offset-4'>Carbs:</strong> {meal.carbs} g</p>
            <p className='text-md'><strong className='text-lg underline underline-offset-4'>Fats:</strong> {meal.fats} g</p>
          </div>
        ))}
      </div>
      <div className=" flex gap-3 items-center justify-center mt-4 p-4 bg-gray-100 rounded-md shadow-xl w-full max-w-[900px]">
        <FaGripfire size={24} className='text-amber-900 ' />
        <p className="text-lg sm:text-2xl font-semibold text-center font-serif text-amber-900 drop-shadow">{quote}</p>
        <FaGripfire size={24} className='text-amber-900 ' />
      </div>
      <p className='text-red-600 p-3  text-sm max-w-[900px] w-full mt-6' >
        <span className='font-semibold underline'>Disclaimer<sup>*</sup></span>
        <br/>
        <span className='italic font-normal text-sm'>
          The diet plans provided are generated by AI and are for informational purposes only. They are not a substitute for professional medical advice. Always consult a healthcare provider before making significant dietary changes.
        </span>
      </p>
    </div>
  );
};

export default DietOutput;
