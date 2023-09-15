import React from 'react';
import {toprated, trailer, show, more, related} from '../../assets/index'

export default function MainDetail({movie}){
    console.log(movie)
 
    return(
        <div className='ml-4 mt-2'>
          <img src={trailer} alt="" 
           className='w-[98%] h-[50%] rounded-md'/>

           <div className='my-2 flex gap-4'>
             <p className='font-bold text-xl'>{movie?.original_title}</p>
             <p>{movie?.release_date}</p>
             {/* <button className='text-red-500 border border-solid border-gray-300 rounded-xl px-2 mr-2'>{movie?.genres[0].name}</button>
             <button className='text-red-500 border border-solid border-gray-300 rounded-xl px-2 '>{movie?.genres[1].name}</button> */}
             <p>{movie?.vote_average}</p>
            </div>
    
         <div className='flex gap-4 flex-col md:flex-row'>
            <div className='w-[100%] md:w-[60%]'>
           <p>{movie?.overview}</p>
           <p className='font-bold text-xl mt-[20px]'>Release Date: <span className='text-red-700'>{movie?.release_date}</span></p>
           <p className='font-bold text-xl mt-[20px]'>Popularity: <span className='text-red-700'>{movie?.popularity}</span></p>
           <p className='font-bold text-xl mt-[20px]'>Production Companies: <span className='text-red-700'>{movie?.production_companies?.[0].name}</span></p>
            <img src={toprated} alt="image" className='mt-4 w-[60%] h-[40px]'/>
           </div>

         <div className='w-[100%] md:w-[40%]'>
           <img src={show} alt="" className='h-[40px] w-[70%]'/>
           <img src={more} alt=""  className='my-2 h-[40px] w-[70%]'/>
           <img src={related} alt="" className='w-[70%] h-[180]'/>
         </div>
         </div>
        </div>
    )
}