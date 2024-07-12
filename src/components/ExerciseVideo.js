import React from 'react'

const ExerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <div className='flex flex-col mx-[20px]'>
      <h2 className='text-2xl md:text-3xl font-bold text-white ml-[40px]'>
        Watch <span className='text-amber-400'>{name}</span> exercise videos
      </h2>
      {exerciseVideos && exerciseVideos.length > 0 ? (
        <div className='grid grid-col-1 md:grid-cols-3 gap-10 p-10'>
          {exerciseVideos.slice(0, 6).map((item, index) => (
            <div key={index} className='border-b-[1px] rounded-lg'>
              <iframe
                className='rounded-t-lg shadow-md shadow-gray-800 mb-3'
                width='100%'
                height='250'
                src={`https://www.youtube.com/embed/${item.video.videoId}`}
                title={item.video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <h5 className='text-white text-sm ml-2'>{item.video.title}</h5>
              <h5 className='text-red-600 text-lg ml-2 font-medium'>{item.video.channelName}</h5>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-red text-center italic'>No exercise videos available.</p>
      )}
    </div>
  )
}

export default ExerciseVideo;
