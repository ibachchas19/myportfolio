import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../img/dsa-project-1.png";
import projImg2 from "../img/dsp-project-2.png";
import projImg3 from "../img/ds-project-3.png";
import projImg4 from "../img/security-project-4.png";
import projImg5 from "../img/forgewebs-project-5.png";
import projImg6 from "../img/furryFacts-project-6.png";
import projImg7 from "../img/ilights-project-7.png";
import projImg8 from "../img/shoes-project-8.png";
import projImg9 from "../img/doprepare-project-9.png";
import projImg10 from "../img/analytix-project-10.png";
import projImg11 from "../img/blog-project-11.png";
import projImg12 from "../img/analytical-project-12.png";
import projImg13 from "../img/brainalyst-project-13.png";
import colorSharp2 from "../img/color-sharp2.png";
import 'animate.css';
import "./Projects.css";
import TrackVisibility from 'react-on-screen';

// Utility function to split the projects array into groups of 6
const splitIntoChunks = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export const Projects = () => {
  const projects = [
    { title: "E-Commerce", description: "Design & Development", imgUrl: projImg7 },
    { title: "Start-Up ", description: "Design & Development", imgUrl: projImg5 },
    { title: "Educational", description: "Design & Development", imgUrl: projImg10 },
    { title: "Security Agency", description: "Design & Development", imgUrl: projImg4 },
    { title: "Blog", description: "Design & Development", imgUrl: projImg11 },
    { title: "Landing Page", description: "Design & Development", imgUrl: projImg1 },
    { title: "Start-Up ", description: "Design & Development", imgUrl: projImg9 },
    { title: "Educational", description: "Design & Development", imgUrl: projImg13 },
    { title: "Landing Pages", description: "Design & Development ", imgUrl: projImg2 },
    { title: "Landing Pages", description: "Design & Development ", imgUrl: projImg3 },
    { title: "Start-Up", description: "Design & Development ", imgUrl: projImg8 },
    { title: "Fun Site", description: "Design & Development ", imgUrl: projImg6 },
    { title: "Educational", description: "Design & Development", imgUrl: projImg12 },
  ];

  const projectGroups = splitIntoChunks(projects, 6);

  return (
    <section className="project " id="projects" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>
                    I have Designed and developed a personal portfolio website to showcase projects and skills. Focused on creating a visually appealing, user-friendly interface and user-experience . <br />
                    Technologies Used: HTML, CSS, JavaScript,React.js,Python-Flask,Mysql,Postman,Bootstrap,Figma,Google Tag,Razorpay,Shiprocket and Git/GitHub.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="tab-0">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projectGroups.map((_, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`tab-${index}`}>Tab {index + 1}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {projectGroups.map((group, index) => (
                        <Tab.Pane eventKey={`tab-${index}`} key={index}>
                          <Row>
                            {group.map((project, idx) => (
                              <ProjectCard key={idx} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img" />
    </section>
  );
};
