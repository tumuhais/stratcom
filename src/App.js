//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Services from './Services';
import About from './About';
//import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
//import Header from './Header';
//import Carousel from './Carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Dashboard from './Dashboard';
function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About/>} />
           <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='Dashboard' element={<Dashboard/>}/>
          </Routes>
      
        </Router>
         <Footer/>
      </div>

  );
}

export default App;