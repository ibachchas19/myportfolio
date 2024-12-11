
import './App.css';
import React,{ useEffect } from 'react';
import {NavBar} from './components/Navbar'
import { Banner } from './components/Banner';
import { Skills} from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import {Footer} from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CTA } from './components/Cta';
import { PopupForm } from './components/Popup';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
   
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>    
      <CTA/> 
      <PopupForm/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
