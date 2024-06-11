import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Col,Row} from 'react-bootstrap';
import meter1 from '../img/meter1.svg';
import meter2 from '../img/meter2.svg';
import meter3 from '../img/meter3.svg';
import colorSharp from '../img/color-sharp.png';
import './Skills.css';

export const Skills= ()=>{
    const responsive = {
        superLargeDekstop:{
            // the naming can be any 
            breakpoint:{max:4000,min:3000},
            items:5
        },
        desktop:{
            breakpoint:{max:3000,min:1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024,min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:464,min:0},
            items:1
        }
    };

return(
    <section className="skills" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>
                    •	Strong Problem Solving Ability,Excellent Teamwork and Collaboration,Adaptability To New Technologies And Environments,Attention To Detail And Accuracy

                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="items">
                            <img src={meter1} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className="items">
                            <img src={meter2} alt="Image" />
                            <h5>REACT.JS</h5>
                        </div>
                        <div className="items">
                            <img src={meter3} alt="Image" />
                            <h5>JAVA SCRIPT</h5>
                        </div>
                        <div className="items">
                            <img src={meter1} alt="Image" />
                            <h5>CSS</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="image" />
    </section>
)    
}