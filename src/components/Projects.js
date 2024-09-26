  import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
  import { ProjectCard } from "./ProjectCard";
  import projImg1 from "../img/project-img1.png";
  import projImg2 from "../img/project-img2.png";
  import projImg3 from "../img/project-img3.png";
  import projImg4 from '../img/project_img4.png';
  import projImg5 from '../img/project_img5.svg';
  import projImg6 from '../img/project_img6.png';
  import colorSharp2 from "../img/color-sharp2.png";
  import 'animate.css';
  import "./Projects.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Educational Website",
      description: "Design & Development Using React.js,Bootstrap,Python and Flask ",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__bounce" :""}>
                <h2>Projects</h2>
                <p>Designed and developed a personal portfolio website to showcase projects and skills. Focused on creating a visually appealing and user-friendly interface.
                Technologies Used: HTML, CSS, JavaScript, Bootstrap,Git/GitHub.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nothing To Show Wait For Ishant to Add New Projects Thank-You For Visting Tab-2</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing To Show Wait For Ishant to Add New Projects Thank-You For Visting Tab-3</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                          </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  )
}
