
import './App.css';
import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {NavBar} from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PopupForm } from './components/Popup';
import PrivacyPolicy from './components/PrivacyPolicy';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
   
  return (
    <Router>
    <div className="App">    
      <NavBar/>
      <PopupForm/> 
      <Routes>
      <Route path="/" element={<Homepage/>}/>   
      <Route path='/projects' element={<ProjectPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>      
      </Routes>      
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
