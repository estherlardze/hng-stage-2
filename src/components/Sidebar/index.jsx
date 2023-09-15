import React from 'react';
import tv from '../../assets/images/tv.png'
import {AiOutlineHome} from 'react-icons/ai';
import {BiCameraMovie, BiSolidMoviePlay} from 'react-icons/bi';
import {HiOutlineLogout} from 'react-icons/hi';
import {LuCalendarDays} from 'react-icons/lu'


export default function index(){

    const data = [
       {
        icon: <AiOutlineHome size={22}/>,
        name: "Home"
       },
       {
        icon: <BiCameraMovie size={22}/>,
        name: "Movies"
       },
       {
        icon: <BiSolidMoviePlay size={22}/>,
        name: "Tv Series"
       },
       {
        icon: <LuCalendarDays size={22}/>,
        name: "Upcoming"
       }
    ]

    return(
     <div className='hidden sm:w-[50px] md:w-[330px] h-[auto] border border-2 shadow-md py-4 rounded-tr-[50px] rounded-br-[50px] relative mr-[50px]'>
      <div className='flex gap-4 mb-[30px] mt-[20px]'>
         <img src={tv} alt="tv" className='w-[30px] h-[30px]' />
         <h4 className='font-bold hidden md:flex'>Movie Box</h4>
      </div>
        {data.map((item) => (
            <div className='flex gap-4 py-[15px] px-[10px] card-hover'>
               <p className='text-[#30302f] '>{item.icon}</p>
               <p className='font-semibold text-[#30302f] text-2xlg hidden md:flex'>{item.name}</p>
            </div>
        ))}
        <div className='border border-solid border-red-300 py-2 rounded-lg px-2 mt-[30px] hidden md:block mx-[20px]'>
          <p className='font-semibold text-sm'>Play movie quizes and earn free tickets</p>
          <p className='text-[#30302f] my-2 text-xs'>50k people are playing now</p>
          <button className='text-red-700 bg-red-200 text-xs rounded-xl py-1 px-2'>Start playing</button>
        </div>

        <div className='flex gap-4 absolute bottom-[20px]'>
         <HiOutlineLogout size={22} />
         <p className='font-semibold text-[#30302f] text-2xlg hidden sm:flex'>Logout</p>
        </div>
     </div>
    )
}