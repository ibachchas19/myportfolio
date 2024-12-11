import {Container,Row,Col} from "react-bootstrap";
import logo from "../img/i_logo-removebg-preview.png"
import navicon1 from '../img/nav-icon1.svg';
import navicon2 from '../img/nav-icon2.svg';
import navicon3 from '../img/nav-icon3.svg';
import { MailchimpForm } from "./MailchimpForm";
import './Footer.css';


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
            <div> <h2><img src={logo} alt="logo" width="60px" className="footer-logo" /> My Portfolio</h2> </div>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ishant-bachchas-a56910240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navicon1} alt="Icon" /></a>
                <a href="https://www.facebook.com/devil.ishant.786?mibextid=ZbWKwL"><img src={navicon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/the_ishant_bachchas?igsh=MTFoaWhjaDhldDNmcQ=="><img src={navicon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  };