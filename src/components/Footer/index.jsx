import React from 'react';
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

export default function Footer(){
    return(
        <div className='mt-[100px] mb-[20px]'>
          <div className='flex gap-6 items-center justify-center mb-4'>
            <AiFillFacebook size={27} className="cursor-pointer"/>
            <AiOutlineInstagram size={27} className="cursor-pointer"/>
            <AiOutlineTwitter size={27} className="cursor-pointer"/>
            <AiFillYoutube size={27} className="cursor-pointer"/>
          </div>
            <div className='flex gap-6 items-center justify-center flex-col sm:flex-row'>
            <p>Conditions to use</p>
            <p>Privacy & Policy</p>
            <p>Rest Room</p>
            </div>
           
        </div>
    )
}

