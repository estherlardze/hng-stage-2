import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Movies from './Movies';
import Footer from './Footer';


const App () => {
 return(
    <div>
      <div>
        <Navbar />
        <Header />
      </div>
      <Movies />
      <Footer />
    </div>
   
 )
}
