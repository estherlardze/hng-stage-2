import React from 'react';
import {toprated, trailer, show, more, related, Star} from '../../assets/index';
import YouTube from 'react-youtube';

export default function MainDetail({movie, trailerKey}){


    const localeDateString = movie?.release_date
    const localDate = new Date(localeDateString);
    const newDate = localDate.toUTCString()

    const formatRuntime = () => {
     const runtime = movie?.runtime
     let hours;
     let remainingMinutes;
     let totalTime;

     if(runtime > 60){
       hours = Math.floor(runtime / 60) + 'h';
       remainingMinutes = runtime % 60 + 'm';
       totalTime = hours + " " + remainingMinutes;
     }
     else{
      totalTime = runtime + 'm'
     }

     return totalTime;
    }

    return(
        <div className='ml-[10px] my-4 '>
           {/* <YouTube videoId={trailerKey} className="player"/> */}
           <img src={trailer} alt="trailer" />

           <div className='my-[20px] flex gap-4'>
              <p className='font-bold text-xl' data-testid="movie-title">{movie?.title}</p>
              <p data-testid="movie-runtime" className='mt-1'>{formatRuntime()}</p>

                {movie &&
                <>
                  <button className="text-red-500 border border-solid border-gray-300 rounded-xl px-2 font-semibold" >
                     {movie?.genres?.[0].name}
                  </button>
                  <button className="text-red-500 border border-solid border-gray-300 rounded-xl px-2 font-semibold" >
                    {movie?.genres?.[1].name}
                  </button>
                </>  
              }    

              <div className='sm:flex items-center gap-3 sm:ml-[10px] hidden'>
              <img src={Star} alt="star" style={{ width: '18px', height: '18px' }} />
              <p>{movie?.vote_average}</p>
              </div>

            </div>

           <div >
            <div className='w-[100%] md:w-[90%]'>
              <p data-testid="movie-overview flex flex-wrap">{movie?.overview}</p>
              <p className='font-bold text-xl mt-[20px]' data-testid="movie-release-date">Release Date: <span className='text-red-700'>{newDate}</span></p>
              <p className='font-bold text-xl mt-[20px]'>Popularity: <span className='text-red-700'>{movie?.popularity}</span></p>
              <p className='font-bold text-xl mt-[20px]'>Production Companies: <span className='text-red-700'>{movie?.production_companies?.[0].name}</span></p>
                <img src={toprated} alt="image" className='mt-4 w-[60%] h-[40px]'/>
           </div>

         </div>
        </div>
    )
}