import { ChevronRight } from "../../assets"
import { MovieCard, Spinner } from ".."
import { useEffect, useState } from "react"
import { Error } from ".."
// import { options } from "../../utils/options"

export default function index() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [movies, setMovies] = useState()


  useEffect(() => {
   const apiKey = "6d4571647e555bda7f37c0dd98c01206";

    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => {
      setMovies(response)
      setIsLoading(false)
    })
    
    .catch(err => setError(err))
  }, [])

  if(isLoading) return <Spinner message="Loading movies..."/>

  if(error) return <Error />

  return (
    <section className="w-10/12 mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-2xl leading-[46.87px] ">Featured Movie</div>
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <span className="font-normal text-lg leading-6 text-rose-700">See more</span>
          <img src={ChevronRight} alt="right arrow" className="w-[12px] h-[12px]"/>
        </div>
      </div>

      <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[80px]">
        { movies?.results.slice(0,10).map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
      </div>
    </section>  
  )
}
