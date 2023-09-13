import React, {useEffect, useState} from 'react';

export function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
   fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=6d457164e555bda7f37c0dd98c01206')
   .then(res => res.json())
   .then(data => console.log(data.results))
   .catch(err => console.error(err))
  }, [])
  
  return (
    <div className='App'>
      
    </div>
  );
}
