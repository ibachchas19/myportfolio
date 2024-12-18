import React from 'react'
import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
import { CTA } from '../components/Cta'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Skills/>    
      <CTA/>            
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Homepage
