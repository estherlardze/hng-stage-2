import React from 'react';

const Header = () => {
  return(
    <div>
      <h2>John Wick 3: Prabellum</h2>

       <div>
       <img src={hmd}/>
        <p>89.0/100</p>
         <div>
          <img src={apple} />
           <p>98%</p>
         </div>
      </div>
      
      <p>John Wick is on the run after killing a member of the international assassins' guild,
        and with a $14 million price tag on his head, he is the target of hit men and women
        everywhere.</p>
       <button>Watch Trailer</button>
    </div>
    
  )
  
}
