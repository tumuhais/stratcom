import React from 'react'
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';
import About from './About';
//import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
function Home() {
  return (
    <div>
      
      <Carousel/>
       <About/>
      <Services />
      <Dashboard/>
      

    </div>
  )
}

export default Home;