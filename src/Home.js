import React from 'react'
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';
import About from './About';
//import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';

function Home() {
  return (
    <div>
      
      <Carousel/>
       <About/>
      <Services />
    
      

    </div>
  )
}

export default Home;