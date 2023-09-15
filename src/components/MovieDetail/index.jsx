import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar, MainDetail } from ".."

export default function index() {
   const[movie, setMovie] = useState([])
   const { movie_Id } = useParams();

   const apiKey = "6d4571647e555bda7f37c0dd98c01206"

   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${ apiKey}`)
    .then(res => res.json())
    .then(data => setMovie(data))
    .catch(err => console.error(err))
   }, {movie_Id})

  return (
    <div className="flex">
        <Sidebar />
        <MainDetail movie={movie} setMovie={setMovie}/>
    </div>
    
    
  )
}
