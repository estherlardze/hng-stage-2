import { Tv, Menu } from "../../assets"
import { useState } from "react"
import { Search } from ".."

export default function index() {
  const [searchTerm, setSearchTerm] = useState("")

//   console.log(searchTerm)

  return (
    <nav 
        className="w-10/12 mx-auto pt-5
        flex flex-row items-center"
    >
        <div className="flex flex-row items-left md:items-centergap-6 mr-auto">
            <img src={Tv} alt="tv" className="w-[50px]"/>
            <div className="text-white font-bold text-xl leading-6 hidden md:flex ml-3">MovieBox</div>
        </div>
        <Search 
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
        />

        <div className="flex flex-row gap-5">
            <div className="text-base text-white leading-6 ml-2 hidden sm:block">Sign in</div>
            <img src={Menu} alt="menu" className="bg-red-600 border-50 rounded-full w-[24px] h-[24px] hidden md:flex"/>
        </div>
    </nav>
  )
}
