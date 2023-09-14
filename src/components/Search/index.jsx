import { searchIcon } from "../../assets"

export default function index({ searchTerm, setSearchTerm }) {
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
    </div>
  )
}
