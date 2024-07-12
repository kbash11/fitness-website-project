import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData,youtubeOptions } from '../utils/FetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'

const ExcerciseDetails = () => {
    const {url}=useContext(AppContext);
    const [exerciseDetail,setExerciseDetail]=useState({});
    const {id}=useParams();
    const [exerciseVideos,setExerciseVideos]=useState([]);
    const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
    const [equipmentExercises,setEquipmentExercises]=useState([]);

    useEffect(()=>{
        const fetchExercisesData=async()=>{
            const youtubeUrl='https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData=await fetchData(`${url}/exercises/exercise/${id}`,exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData=await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideoData.contents);
            
            const targetMuscleExercisesData=await fetchData(`${url}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData=await fetchData(`${url}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        }
        fetchExercisesData();

    },[id,url]);
  return (
    <div className="bg-gradient-to-b from-sky-900 to-blue-950 flex flex-col space-y-10 items-center">
      <Details exerciseDetail={exerciseDetail} />
      <div className='w-11/12 h-[2px] bg-slate-400 rounded-full opacity-40'></div>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <div className='w-11/12 h-[2px] bg-slate-400 rounded-full opacity-40'></div>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExcerciseDetails
