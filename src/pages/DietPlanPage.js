import React from 'react';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import DietOutput from '../components/DietOutput';
import Spinner from '../components/Spinner';
import dietImage from '../assets/diet.jpg'

const DietPlanForm = () => {
  
  const {formData, setFormData, loading,mealPlan,fetchDietData}=useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      fetchDietData();
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <div className='w-full'>
      
      <div className='flex w-full h-auto '>
        
        <div className='hidden lg:block w-full'>
          <img src={dietImage} alt='dietImage' className='h-full max-w-full'/>
        </div>
        <div className='w-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-800 to-blue-950 '>
          <h2 className=" mt-[60px] mb-5 text-md sm:text-xl font-bold text-amber-400 roboto-bold text-center underline underline-offset-8 ">Please specify the details needed to prepare a diet plan</h2>
          <form onSubmit={handleSubmit} className="max-w-md px-7 mt-4">
            
            {/* AGE, HEIGHT, WEIGHT */}
            <div className='flex space-x-8'>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  name="age"
                  id="floating_age"
                  className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_age"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Age
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  name="height"
                  id="floating_height"
                  className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_height"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Height (cm)
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  name="weight"
                  id="floating_weight"
                  className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_weight"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Weight (kg)
                </label>
              </div>
            </div>

            {/* DIET PREFERENCE and ACTIVITY LEVEL */}
            <div className='flex space-x-8 mt-2'>
              <div className="relative z-0 w-full mb-5 group">
                <select
                  name="dietPreference"
                  id="floating_diet_preference"
                  className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={formData.dietPreference}
                  onChange={handleChange}
                  required
                >
                  <option value="" className='text-black text-sm' >Select</option>
                  <option value="vegetarian " className='text-black text-sm'>Vegetarian</option>
                  <option value="non-vegetarian" className='text-black text-sm'>Non-Vegetarian</option>
                  <option value="vegan" className='text-black text-sm'>Vegan</option>
                  <option value="keto" className='text-black text-sm'>Keto</option>
                </select>
                <label
                  htmlFor="floating_diet_preference"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Diet Preference
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <select
                  name="activityLevel"
                  id="floating_activity_level"
                  className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={formData.activityLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="" className='text-black'>Select</option>
                  <option value="sedentary" className='text-black'>Sedentary</option>
                  <option value="lightlyActive" className='text-black'>Lightly Active</option>
                  <option value="moderatelyActive" className='text-black'>Moderately Active</option>
                  <option value="veryActive" className='text-black'>Very Active</option>
                  <option value="extremelyActive" className='text-black'>Extremely Active</option>
                </select>
                <label
                  htmlFor="floating_activity_level"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-6"
                >
                  Activity Level
                </label>
              </div>
            </div>

            {/* NO. OF WORKOUTS AND MEALS */}
            <div className='flex space-x-8'>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  name="workoutDays"
                  id="floating_workout_days"
                  className="block py-4 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.workoutDays}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_workout_days"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  No. of Workouts
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  name="mealsPerDay"
                  id="floating_meals_per_day"
                  className="block py-4 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.mealsPerDay}
                  onChange={handleChange}
                  min="2"
                  max="4"
                  required
                />
                <label
                  htmlFor="floating_meals_per_day"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Meals per Day
                </label>
              </div>
            </div>

            {/* FITNESS GOAL */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="primaryGoal"
                id="floating_primary_goal"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.primaryGoal}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_primary_goal"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Primary Health and Fitness Goal
              </label>
            </div>

            {/* MEDICAL CONDITIONS */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="medicalCondition"
                id="floating_medical_condition"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.medicalCondition}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_medical_condition"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Medical Condition <span className='italic text-xs'>(write n.a if you are medically fit)</span>
              </label>
            </div>

            {/* FOOD ALLERGIES AND DISLIKE FOOD */}
            <div className='flex space-x-8'>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="foodAllergies"
                id="floating_food_allergies"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.foodAllergies}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_food_allergies"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Food Allergies
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="dislikedFoods"
                id="floating_disliked_foods"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.dislikedFoods}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_disliked_foods"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Foods You Dislike
              </label>
            </div>
            </div>

            <button type="submit" className="text-white mb-3 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

        </div>

      </div>
      
      <div className='flex justify-center item-center my-4 w-full'>
      {
      loading ? (<Spinner/>) :
      (mealPlan && <DietOutput />)
      }
      </div>
      
    </div>
  );
};

export default DietPlanForm;
