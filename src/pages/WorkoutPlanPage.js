import React, { useState, useContext, useEffect } from 'react';
import workoutImg from '../assets/workout_plan.jpg';
import { AppContext } from '../context/AppContext';
import HorizontalScrollBar from '../components/HorizontalScrollBar';
import Spinner from '../components/Spinner'
import ExcerciseCard from '../components/ExcerciseCard';
import Pagination from '../components/Pagination';
import { useRef } from 'react';

import { exerciseOptions,fetchData} from '../utils/FetchData';

const WorkoutPlanPage = () => {
  const {loading, setLoading, url} = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(12);
  const resultsRef = useRef(null); // Ref for the "Showing Results" div
  


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${url}/exercises/bodyPartList`,exerciseOptions);
      console.log('bodyPartsData',bodyPartsData);
      setBodyParts(bodyPartsData);
    }
    fetchExercisesData();
  },[url]);

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let excercisesData=[];
      if(selectedBodyPart.toLowerCase()!=='all'){
        excercisesData=await fetchData(`${url}/exercises/bodyPart/${selectedBodyPart}`,exerciseOptions);
      }else{
        excercisesData=await fetchData(`${url}/exercises?limit=0&offset=0`,exerciseOptions);
      }
      console.log('ExerciseData',excercisesData);
      setExercises(excercisesData);
    }

    fetchExercisesData();
  },[selectedBodyPart,url]);
  const handleSearch = async()=>{
    if(search){
      setLoading(true);
      const exerciseData = await fetchData(`${url}/exercises?limit=0&offset=0`, exerciseOptions);
      console.log(exerciseData);
      const searchedExercises = exerciseData.filter((exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
      );
      
      setExercises(searchedExercises);
      setLoading(false);
      setCurrentPage(1); // Reset to first page on new search
      
    }
  }

  // Get current exercises
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Change page
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const results = search !== '' ? search : selectedBodyPart;

  return (
    <div className='w-full h-screen'>
      <img src={workoutImg} alt='workoutImage' className='h-full w-full object-cover' />
      <h1 className='text-center font-medium font-sans text-xl sm:text-2xl my-6 md:text-3xl text-blue-900'>Awesome Exercises you should know</h1>

      {/* Search bar */}
      <div className='w-full flex justify-center p-2'>
        <div className='flex space-x-3 w-full max-w-[500px] sm:max-w-[550px] md:max-w-[700px] h-[35px] md:h-[40px] text-sm md:text-md'>
          <input
            required
            type='text'
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            name='search'
            value={search}
            placeholder='Search Exercises'
            className='px-4 py-2 rounded-lg outline outline-1 outline-offset-0 outline-blue-700 bg-slate-100 focus:outline focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <button onClick={handleSearch} type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            Search
          </button>
        </div>
      </div>

      <HorizontalScrollBar bodyParts={bodyParts} setSelectedBodyPart={setSelectedBodyPart} selectedBodyPart={selectedBodyPart} search={search}  setSearch={setSearch}/>
      
      {/* Showing result */}
      <div ref={resultsRef} className='results-section w-full p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold md:text-2xl my-4 text-blue-900 underline underline-offset-8 decoration-dashed'>Showing Results for {results}</h1>
        
        {loading ? (<Spinner />) : (
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
            {currentExercises.map((exercise, index) => (
              <ExcerciseCard key={index} exercise={exercise} />
            ))}
          </div>  
        )}
        <div>
          {exercises.length > exercisesPerPage && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlanPage;
