import { Rating } from ".."
import { Link } from "react-router-dom"


export default function index({ movie }) {
  console.log(movie)

  const genre = "Actions, Adventures, fiction"

  return (
    <div className="w-[250px] h-[490px]">
        <Link
          to={`/movie/${movie?.id}`}
          style={{ textDecoration: "none" }}
        >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt="movie"
        />
        </Link>
        <div className="text-gray-400 font-bold text-xs leading-[15.62px] mt-3">USA, 2016 - Current</div>
        <div className="text-gray-700 font-bold text-lg leading-[23.44px] mt-3 mb-3">{movie?.original_title}</div>
        <Rating
          rating="86.0 / 100"
          like="97%"
          id={movie?.id}
        />
        <div className="font-bold text-xs leading-[15.62px] text-gray-400">{genre}</div>
      </div>
  )
}
