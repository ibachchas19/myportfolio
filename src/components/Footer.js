import {Container,Row,Col} from "react-bootstrap";
import logo from "../img/logo.svg"
import navicon1 from '../img/nav-icon1.svg';
import navicon2 from '../img/nav-icon2.svg';
import navicon3 from '../img/nav-icon3.svg';
import { MailchimpForm } from "./MailchimpForm";


// export const Footer = () =>{
//     return (
//         <Footer className="footer">
//             <Container>
//                 <Row className="align-item-center">
//                     <Col sm={6} >
//                     <img src={logo} alt="logo" />
//                     </Col>
//                     <Col sm={6} className="text-center text-sm-end">
//                     <div className="social-icons">
//                         <a href=""><img src={navicon1}/></a>
//                         <a href=""><img src={navicon2}/></a>
//                         <a href=""><img src={navicon3}/></a>
//                     </div>
//                     <p>CopyRight 2024. All Right Are Reserved Ishant Bachchas</p>
//                     </Col>
//                 </Row>
//             </Container>

//         </Footer>

//     )
// }
export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navicon1} alt="Icon" /></a>
                <a href="#"><img src={navicon2} alt="Icon" /></a>
                <a href="#"><img src={navicon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }