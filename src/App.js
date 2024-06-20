
import './App.css';
import React,{ useEffect } from 'react';
import {NavBar} from './components/Navbar'
import { Banner } from './components/Banner';
import { Skills} from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import {Footer} from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const experiences = [
    {
      direction: "left",
      jobTitle: "GET",
      company: "HR POLY COATS PVT LTD",
      duration: "APRIL 2023 - MAY 2023",
      description: "Working on building and maintaining web applications."
    },
    {
      direction: "right",
      jobTitle: "R&D EXECUTIVE",
      company: "SAMHWA PAINTS IND PVT Ltd",
      duration: "MAY 2023 - SEP 2023",
      description: "Focused on creating responsive UI components and improving UX."
    },
    {
      direction: "LEFT",
      jobTitle: "WEB DEVELOPER",
      company: "4D STUDIO",
      duration: "APRIL 2024 - JUN 2023",
      description: "Focused on creating responsive UI components and improving UX."
    },
    // Add more experiences as needed
  ];

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
      {/* <Timeline  experiences={experiences}/> */}
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
