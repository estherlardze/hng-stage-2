import { Rating } from ".."
import { Link } from "react-router-dom";
import Fav from '../../assets/images/Favorite.png'


export default function index({ movie }) {

  const genre = "Actions, Adventures, fiction"

  return (
    <div className="w-[250px] h-[490px] card relative  transition-transform transform hover:scale-105" data-testid= "movie-card">
        <Link
          to={`/movie/${movie?.id}`}
          style={{ textDecoration: "none" }} 
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title} data-testid= "movie-poster"
          /> 
          <img src={Fav} alt={movie?.title} className="absolute top-7 right-7 hover:text-red-500 favorite"  />
        </Link>
          <div className="text-gray-400 font-bold text-xs leading-[15.62px] m-2" data-testid="movie-release-date">USA, 2016 - Current</div>
          <div className="text-gray-700 font-bold text-lg leading-[23.44px] m-2" data-testid= "movie-title">{movie?.original_title.slice(0,20)}</div>
          <Rating
            rating="86.0 / 100"
            like="97%"
            id={movie?.id}
          />
        
        <div className="font-bold text-xs leading-[15.62px] text-gray-400 m-2">{genre}</div>
      </div>
  )
}
