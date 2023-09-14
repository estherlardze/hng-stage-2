import { imdb, Tomato } from "../../assets"

export default function index({ rating, like, id }) {
  return (
    <div className="flex flex-row gap-10 items-center mb-4">
        <div className="flex flex-row gap-3 items-center">
            <img src={imdb} alt="imdb" />
            <div className={`font-normal text-xs leading-3 ${ id ? "text-gray-900" : "text-white"}`}>{ rating }</div>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <img src={Tomato} alt="tomato" />
            <div className={`font-normal text-xs leading-3 ${ id ? "text-gray-900" : "text-white"}`}>{ like }</div>
        </div>
    </div>
  )
}