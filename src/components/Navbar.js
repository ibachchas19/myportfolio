import { useEffect, useState } from "react"
import { Navbar,Container,Nav } from "react-bootstrap"
import './Navbar.css'
import logo from '../img/logo.svg';
import navicon1 from '../img/nav-icon1.svg';
import navicon2 from '../img/nav-icon2.svg';
import navicon3 from '../img/nav-icon3.svg';

export const NavBar=()=>{
    const[activeLink,setActiveLink]=useState('home');
    const[scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        return()=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdatedActiveLink=(value) =>{
        setActiveLink(value)
    }
    return(
        <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrrolled": ""}>
      <Container fluid>
        <Navbar.Brand href="#home">
            {/* <img src={logo} alt="logo" /> */}Ishant 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="custom-left-margin">
            <Nav.Link href="#home"className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdatedActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdatedActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdatedActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ishant-bachchas-a56910240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navicon1} alt="" /></a>
                <a href="https://www.facebook.com/devil.ishant.786?mibextid=ZbWKwL"><img src={navicon2} alt="" /></a>
                <a href="https://www.instagram.com/the_ishant_bachchas?igsh=MTFoaWhjaDhldDNmcQ=="><img src={navicon3} alt="" /></a>
            </div>
                          
            <button className="vvd" onClick={()=> document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}><span>Lets Connect</span></button>
            
          </span>
     </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}