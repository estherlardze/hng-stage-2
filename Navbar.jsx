import React, {useState} from 'react';
import logo from '../img.png';
import menu from '../menu.png'

export function Navbar(){
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  return(
    <div>
       <div>
        <img src={logo} className='logo' />
        <h4>MovieBox</h4>
       </div>
       <input type="text" placeholder='Search...' value={search} onChange={handleSearch}/>
       <div>
         <p>Sign in</p>
         <img src={menu} alt="menu">
       </div>
    </div>
  )
}
