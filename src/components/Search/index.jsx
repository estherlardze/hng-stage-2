import { searchIcon } from "../../assets";
import React, {useEffect, useState} from 'react';
import { MovieCard, Spinner } from ".."



export default function index({ searchTerm, setSearchTerm }) {

  const [searchedMovies, setSearchedMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const apiKey = "6d4571647e555bda7f37c0dd98c01206"
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchedMovies}`;

  fetch(apiUrl)
  .then(response => response.json())
    .then(response => { setSearchedMovies(response)
      console.log(searchedMovies)

      setIsLoading(false)
      setSearchTerm("")
    })
    
    .catch(err => setError(err))
  
  }, [searchTerm])

  return (
    <div 
      className="w-[70%] md:w-[50%] h-[36px] flex flex-row justify-between items-center
      border-2 border-white rounded-md py-[6px] px-[10px] mr-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full bg-transparent focus:border-none focus:outline-none text-white
            placeholder:text-base placeholder:font-normal placeholder:text-white"
          placeholder="What do you want to watch?"
        />
        <img src={searchIcon} className=" w-[16px] h-[16px]"/>
        
        {/* <div className="mt-[40px] ">
         <MovieCard movie={searchedMovies}  />
      </div> */}
    </div>
  )
}
